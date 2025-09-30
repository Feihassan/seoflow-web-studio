const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SEO Flow Web Studio",
    "url": "https://seoflow-web-studio.com",
    "logo": "https://seoflow-web-studio.com/favicon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254727109399",
      "contactType": "customer service",
      "email": "faisalabdi493@gmail.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KE"
    },
    "sameAs": [
      "https://wa.me/254727109399"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO-Friendly Web Development",
    "description": "Professional web design and development services with SEO optimization",
    "provider": {
      "@type": "Organization",
      "name": "SEO Flow Web Studio"
    },
    "serviceType": "Web Development",
    "areaServed": "Worldwide"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
};

export default StructuredData;