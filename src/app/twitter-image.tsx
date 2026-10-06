// Next.js needs these route options declared statically in each file, so they
// are restated here rather than re-exported from the Open Graph image.
import OpengraphImage from "./opengraph-image";
import { site } from "@/data/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default OpengraphImage;
