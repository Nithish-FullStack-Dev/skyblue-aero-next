"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import FadeUpStagger from "@/components/motion/FadeUpStagger";

const posts = [
  {
    slug: "future-of-private-aviation",
    title: "The Future of Private Aviation: Trends Shaping 2026",
    excerpt:
      "From sustainable aviation fuel to AI-powered operations, the landscape of private aviation is evolving rapidly.",
    content: `
      The landscape of private aviation is undergoing a tectonic shift. As we navigate through 2026, the industry is no longer just about speed and luxury; it is about intelligence, sustainability, and seamless integration.
      
      The push for net-zero emissions has accelerated the adoption of Sustainable Aviation Fuel (SAF). Leading operators are now committing to 100% SAF blends, significantly reducing the carbon footprint of transcontinental travel without compromising engine performance. This transition is supported by a growing infrastructure of green hangars and carbon-offset programs that are becoming standard for corporate flight departments.
      
      Artificial intelligence is optimizing everything from flight paths to predictive maintenance. By analyzing real-time weather patterns and technical data, AI ensures that every mission is as efficient and safe as possible. These systems can predict mechanical issues before they occur, drastically reducing AOG (Aircraft on Ground) time and ensuring that schedules remain uninterrupted.
      
      Beyond the cockpit, the passenger experience is being redefined by hyper-personalization. Biometric boarding, ultra-high-speed satellite connectivity, and wellness-focused cabin environments—including circadian lighting and advanced air filtration—ensure that travelers arrive at their destination refreshed and ready for business. The integration of electric vertical takeoff and landing (eVTOL) aircraft for 'last-mile' transport is also bridging the gap between major airports and final urban destinations.
    `,
    image: "/images/hero-jet.jpg",
    date: "March 15, 2026",
    category: "Industry",
    author: "Jameson Wright",
    readTime: "8 min read",
  },
  {
    slug: "choosing-right-aircraft",
    title: "Choosing the Right Aircraft: A Buyer's Guide",
    excerpt:
      "Key considerations when selecting your first or next business aircraft.",
    content: `
      Acquiring an aircraft is a monumental decision that requires balancing operational needs with long-term financial goals. Whether you are looking for a light jet for regional hops or a global cabin for international missions, the criteria remain stringent and multifaceted.
      
      Understanding your primary mission profile is essential. If 90% of your flights are domestic, over-investing in an ultra-long-range jet may lead to unnecessary overhead in fuel, crew, and maintenance costs. However, payload capacity remains a non-negotiable factor for corporate teams who need to transport full executive boards along with significant baggage without weight-and-balance restrictions.
      
      The cabin is your office in the sky. Modern buyers are prioritizing low cabin altitude systems—which reduce fatigue—and high-speed Ka-band connectivity to ensure productivity never halts. Ergonomics have taken center stage, with modular seating arrangements that allow for both collaborative meetings and restful sleep on overnight legs.
      
      Market liquidity and residual value should also drive the selection process. Certain airframes hold their value significantly better than others due to robust manufacturer support and global demand in the secondary market. Engaging a professional brokerage early in the process ensures that pre-purchase inspections and complex tax structures are handled with precision, protecting your capital investment.
    `,
    image: "/images/jet-interior.jpg",
    date: "March 8, 2026",
    category: "Brokerage",
    author: "Elena Rossi",
    readTime: "10 min read",
  },
  {
    slug: "international-trip-planning",
    title: "Mastering International Trip Planning",
    excerpt: "Behind the scenes of a complex international mission.",
    content: `
      Crossing borders in a private jet involves a sophisticated choreography of permits, slots, and ground handling arrangements. A single oversight can ground a multi-million dollar operation and derail critical business objectives.
      
      Overflight permits and landing rights require meticulous documentation and deep knowledge of international aviation law. Navigating the geopolitical landscape is a full-time job for flight coordination teams, ensuring that all regulatory hurdles are cleared weeks in advance. This includes staying abreast of temporary flight restrictions, customs requirements, and health protocols that can change with very little notice.
      
      The mission doesn't end on the tarmac. Executive protection, secure transport, and catering must be synced perfectly with the aircraft's arrival to provide the seamless experience expected in private flight. This requires a global network of vetted partners who understand the nuances of VIP handling at both major international hubs and remote regional strips.
      
      Fuel planning and technical stops are another layer of complexity. Strategically choosing fuel stops based on current pricing, runway lengths, and turn-around efficiency can save thousands of dollars and hours of time. Effective communication between the flight crew, the dispatch center, and the lead passenger is the glue that holds these complex international itineraries together.
    `,
    image: "/images/jet-aerial.jpg",
    date: "February 28, 2026",
    category: "Operations",
    author: "Capt. Marcus Chen",
    readTime: "7 min read",
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream">
        <p className="font-display text-2xl text-brand-navy">Post not found.</p>
      </div>
    );
  }

  return (
    <main className="bg-brand-cream min-h-screen">
      <header className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#06111D]/45" />
          <div className="absolute inset-0 bg-linear-to-b from-[#06111D]/20 via-[#06111D]/35 to-[#06111D]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,163,77,0.18),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,17,29,0.82),rgba(6,17,29,0.28),rgba(6,17,29,0.78))]" />
        </div>

        <div className="absolute inset-0 bg-brand-navy/40" />
        <div className="absolute inset-0 flex items-end pb-20">
          <div className="max-w-350 mx-auto px-6 md:px-10 w-full">
            <FadeUpStagger>
              <span className="inline-block font-body text-xs text-brand-gold tracking-[0.3em] uppercase mb-6">
                {post.category}
              </span>
              <SplitTextReveal
                as="h1"
                className="text-2xl md:text-4xl font-display font-bold text-white max-w-4xl leading-[1.1]"
              >
                {post.title}
              </SplitTextReveal>
            </FadeUpStagger>
          </div>
        </div>
      </header>

      <section className="py-10 md:py-16">
        <div className="max-w-350 mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <article className="lg:col-span-7">
              <FadeUpStagger>
                <div className="whitespace-pre-line font-body text-lg text-brand-navy/80 leading-[1.8] tracking-wide">
                  {post.content}
                </div>
              </FadeUpStagger>
            </article>

            <aside className="lg:col-span-3 border-t border-brand-navy/10 pt-8">
              <div className="sticky top-32">
                <div className="mb-8">
                  <p className="font-body text-[15px] text-brand-navy/40 uppercase tracking-widest mb-2">
                    Author
                  </p>
                  <p className="font-display text-lg text-brand-navy">
                    {post.author}
                  </p>
                </div>
                <div className="mb-8">
                  <p className="font-body text-[15px] text-brand-navy/40 uppercase tracking-widest mb-2">
                    Published
                  </p>
                  <p className="font-body text-lg text-brand-navy/70">
                    {post.date}
                  </p>
                </div>
                <div className="mb-8">
                  <p className="font-body text-[15px] text-brand-navy/40 uppercase tracking-widest mb-2">
                    Reading Time
                  </p>
                  <p className="font-body text-lg text-brand-navy/70">
                    {post.readTime}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="md:py-20 py-10 bg-white">
        <div className="max-w-350 mx-auto px-6 md:px-10">
          <h3 className="font-display text-3xl text-brand-navy mb-12">
            Related Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts
              .filter((p) => p.slug !== slug)
              .slice(0, 2)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group"
                >
                  <div className="flex gap-6 items-start md:flex-row flex-col">
                    <div className="relative md:w-32 md:h-32 w-full h-65 shrink-0 overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div>
                      <span className="font-body text-[10px] text-brand-gold uppercase tracking-widest">
                        {related.category}
                      </span>
                      <h4 className="font-display text-lg text-brand-navy mt-1 group-hover:text-brand-gold transition-colors">
                        {related.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
