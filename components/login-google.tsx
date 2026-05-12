import { type Provider } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client'
import { Button } from './ui/button';

export function LoginGoogle({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
    const handleLogin = async () => {

        const supabase = createClient();
        const provider = 'google' as Provider

        try {
            await supabase.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: `http://127.0.0.1:54321/auth/v1/callback`,
                },
            })
        } catch (error: unknown) {

        }
    }

    return (
        <Button onClick={handleLogin}>
            <div id="g_id_onload"
                data-client_id="241681447406-7kgkapa91cisibqmb9frsshtbc1nrg03.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-login_uri="http://localhost:3000"
                data-auto_prompt="false">
            </div>

            <div className="g_id_signin"
                data-type="standard"
                data-shape="pill"
                data-theme="outline"
                data-text="signin_with"
                data-size="large"
                data-logo_alignment="left">
            </div>

        </Button>

    )
}