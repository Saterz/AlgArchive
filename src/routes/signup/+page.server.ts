import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
    signup: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData()
        const email = formData.get("email") as string
        const password = formData.get("password") as string
        const confirm = formData.get("confirm") as string

        if (password.length < 8) return fail(400, { message: "Password must be at least 8 characters." })
        if (password !== confirm) return fail(400, { message: "Passwords do not match" })

        const { data, error: err } = await supabase.auth.signUp({ email, password })
        if (err) return fail(500, { message: err.message });

        function getTextBeforeCharacter(str: string, char: string) {
            const index = str.indexOf(char);
            if (index === -1) {
                return str; // Character not found, return the original string
            }
            return str.substring(0, index);
        }

        const userId = data?.user?.id
        const username = getTextBeforeCharacter(email, "@")
        const { error: upsertError } = await supabase
            .from("profiles")
            .upsert({ user_id: userId, username });

        if (upsertError?.message === "insert or update on table \"profiles\" violates foreign key constraint \"profiles_user_id_fkey\"") {
            return fail(400, { message: "An account with this email already exists. Please log in or use a different email address." })
        }
        if (upsertError?.message === "duplicate key value violates unique constraint \"profiles_username_key\"") {
            return fail(400, { message: "This username is already taken. Please choose a different one." })
        }
        if (upsertError) return fail(400, { message: upsertError.message });

        return { message: "Check your email to verify your account" }
    }
}