// Import Inter Font Family
import { Poppins, Caveat} from "next/font/google";
const primary = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal'],
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-primary',
});
const secondary = Caveat({
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-secondary',
});


export { primary, secondary };