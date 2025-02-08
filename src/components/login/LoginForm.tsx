import { useCallback, useState } from "react";
import { Container } from "../Global.styles";
import Input from "../input/Input";
import * as Login from "./LoginForm.styles";
import { AiOutlineGoogle } from "react-icons/ai"
import { useNavigate } from "react-router";
export default function LoginForm() {
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const isDisabled = useCallback(() => {
        return !email || !password;
    }, [email, password]);
    const naivgatie = useNavigate();
    function handleSubmit(){
        naivgatie('/');
    }

    return (
        <Login.Wrapper>
            <Login.Header>
                <Login.Logo src="https://demo.nativsoft.com/upload/logo/1735849823_6776f75f3800c.png" />
                <Login.Title>Login ke Indotweet</Login.Title>
            </Login.Header>
            <Container>
                <Login.Form>
                    <Input autoFocus={true} onChange={(e: any) => setEmail(e.target.value)} placeholder="Ketikan email atau password" />
                    <Input autoFocus={true} onChange={(e: any) => setPassword(e.target.value)} type="password" placeholder="Ketikan email atau password" />
                    <Login.Button onClick={handleSubmit} disabled={isDisabled()} type="button" >
                        <span>Login</span>
                    </Login.Button>
                </Login.Form>
                <Login.SocialLogin type="button" >
                    <AiOutlineGoogle size={24} />
                    <span>Login Dengan Google</span>
                </Login.SocialLogin>
            </Container>
        </Login.Wrapper>
    )
}