import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/next';

export default function App({ Component, pageProps }: any) {
    return (
        <>
            <Component {...pageProps} />
            <Analytics />
        </>
    );
}
