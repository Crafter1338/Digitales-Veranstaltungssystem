import { ServerDataProvider } from './contexts/ServerData';
import { ViewportProvider } from './contexts/Viewport'
import { SignInProvider } from './contexts/SignIn';
import { SignUpProvider } from './contexts/SignUp';

export default function({ children }) {
    return(
        <>
            <ServerDataProvider>
                <ViewportProvider>
                    <SignInProvider>
                        <SignUpProvider>
                            { children }
                        </SignUpProvider>
                    </SignInProvider>
                </ViewportProvider>
            </ServerDataProvider>
        </>
    );
}