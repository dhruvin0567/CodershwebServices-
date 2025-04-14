import { Helmet } from 'react-helmet';
import Favicon from "../../../public/favicon.webp";


function SEO({ title, description, keywords, canonical }) {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content="Codersh Web Services" />
                <link rel="canonical" href={canonical} />
                <link rel="icon" href={Favicon} type="image/x-icon" />
            </Helmet>
        </div>
    )
}

export default SEO