import { NextFont } from 'next/dist/compiled/@next/font';
import { Poppins } from 'next/font/google';

export const poppins: NextFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
});
