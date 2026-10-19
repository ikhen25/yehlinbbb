import { Cake, GlassWater, Heart, Leaf, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import {
  categories,
  phones,
  ribbon,
  WHATSAPP_DISPLAY,
  whatsappHref,
  type MenuItem,
} from "@/data/menu";

const highlights = [
  {
    icon: UtensilsCrossed,
    title: "Good food, great drinks, happy moments",
    body: "Cakes for the celebration, a cold glass for the afternoon, a plate when the weekend shows up.",
  },
  {
    icon: Heart,
    title: "Freshly made with love",
    body: "Small batches, real ingredients, and the kind of care you can taste in the first bite.",
  },
  {
    icon: Leaf,
    title: "Freshly prepared. Quality ingredients.",
    body: "Your satisfaction matters. If something isn’t right, tell us — we want you happy.",
  },
];

function Dish({ item }: { item: MenuItem }) {
  const tone = item.tone === "ember" ? "swatch-ember" : item.tone === "milk" ? "swatch-milk" : "";
  const cropTop = item.name === "Fresh Yogurt" || item.name === "Fresh Pineapple Juice";
  return (
    <article className="plate dish">
      {item.image ? (
        <img
          src={item.image}
          alt={item.alt}
          className={cropTop ? "dish-photo object-top" : "dish-photo"}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className={`dish-photo swatch ${tone}`} aria-hidden="true">
          <span>{item.mark}</span>
        </div>
      )}
      <div className="dish-copy">
        {item.badge ? <span className="badge">{item.badge}</span> : null}
        <h4 className="font-display text-xl leading-tight text-ink">{item.name}</h4>
        <p className="mt-1 text-sm leading-snug text-cocoa">{item.blurb}</p>
        <a
          className="order-link"
          href={whatsappHref(item.name)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Order ${item.name} on WhatsApp`}
        >
          <WhatsAppIcon className="size-4" />
          Order on WhatsApp
        </a>
      </div>
    </article>
  );
}

export function HomePage() {
  const orderHref = whatsappHref();

  return (
    <div id="top">
      <a className="skip-link" href="#menu">
        Skip to menu
      </a>

      <header className="sticky top-0 z-30 border-b border-line bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#top" className="font-display text-xl leading-none whitespace-nowrap text-ink">
            YEHLIN <span className="text-gold-deep">BBB</span>
          </a>
          <nav className="flex items-center gap-1 text-sm font-semibold text-chocolate sm:gap-2">
            <a className="inline-flex min-h-11 items-center px-2" href="#menu">
              Menu
            </a>
            <a className="inline-flex min-h-11 items-center px-2" href="#why">
              Why us
            </a>
            <a className="inline-flex min-h-11 items-center px-2" href="#order">
              Order
            </a>
          </nav>
          <ButtonLink
            href={orderHref}
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            className="hidden md:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </ButtonLink>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-8 sm:px-6 sm:pt-12 lg:grid-cols-2 lg:gap-14 lg:pb-20">
          <div>
            <p className="rise inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-gold-deep uppercase">
              <MapPin className="size-4" aria-hidden="true" />
              Sunyani
            </p>
            <h1 className="rise d1 mt-3 font-display text-6xl leading-none text-ink sm:text-7xl">
              YEHLIN
              <span className="mt-1 block text-3xl tracking-widest text-gold-deep sm:text-4xl">BBB</span>
            </h1>
            <p className="rise d2 mt-4 text-lg font-semibold text-chocolate sm:text-xl">
              Bakes, Bites & Brews
            </p>
            <p className="rise d2 mt-3 font-display text-2xl text-chocolate italic sm:text-3xl">
              “Tasty Treats for Every Mood!”
            </p>
            <p className="rise d3 mt-4 max-w-md text-base leading-relaxed text-cocoa">
              Cakes for the big days, bites for the weekend, and cold drinks for right now.
            </p>
            <div className="rise d4 mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={orderHref}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="w-full sm:w-auto"
              >
                <WhatsAppIcon className="size-5" />
                Order on WhatsApp
              </ButtonLink>
              <ButtonLink href="#menu" variant="ghost" size="lg" className="w-full sm:w-auto">
                View Menu
              </ButtonLink>
            </div>
            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-cocoa">
              <Phone className="size-4 text-chocolate" aria-hidden="true" />
              {phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="inline-flex min-h-11 items-center font-semibold text-chocolate"
                >
                  {phone.display}
                </a>
              ))}
            </p>
          </div>

          <div className="relative">
            <img
              src="/images/hero.jpg"
              alt="Chocolate celebration cake, cupcakes, pineapple juice and sobolo"
              className="hero-frame"
              width={1200}
              height={1600}
            />
            <div className="seal absolute -bottom-4 left-4 bg-foam shadow-card sm:left-6">
              <span>Est.</span>
              <strong>BBB</strong>
              <span>Sunyani</span>
            </div>
          </div>
        </section>

        <div className="ribbon" aria-hidden="true">
          <div className="ribbon-track">
            <p className="ribbon-set">{ribbon.repeat(4)}</p>
            <p className="ribbon-set">{ribbon.repeat(4)}</p>
          </div>
        </div>

        <section id="menu" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-gold-deep uppercase">Our menu</p>
            <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">Three moods. One table.</h2>
            <p className="mt-3 text-base leading-relaxed text-cocoa">
              Bakes from the oven, bites for the weekend, and brews poured cold. Tap any dish to order
              on WhatsApp.
            </p>
          </div>

          <div className="jump -mx-4 mt-6 flex gap-2 overflow-x-auto px-4 py-3">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="press inline-flex min-h-11 shrink-0 items-center rounded-full bg-chocolate px-4 text-sm font-semibold text-foam"
              >
                {category.label}
              </a>
            ))}
          </div>

          <div className="mt-6 space-y-14">
            {categories.map((category) => (
              <section key={category.id} id={category.id}>
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold tracking-widest text-gold-deep uppercase">
                      {category.index} — {category.label}
                    </p>
                    <h3 className="mt-1 font-display text-3xl text-ink sm:text-4xl">{category.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-cocoa sm:text-base">
                      {category.blurb}
                    </p>
                  </div>
                  {category.id === "bakes" ? (
                    <Cake className="hidden size-8 text-gold-deep sm:block" aria-hidden="true" />
                  ) : null}
                  {category.id === "bites" ? (
                    <UtensilsCrossed className="hidden size-8 text-gold-deep sm:block" aria-hidden="true" />
                  ) : null}
                  {category.id === "brews" ? (
                    <GlassWater className="hidden size-8 text-gold-deep sm:block" aria-hidden="true" />
                  ) : null}
                </div>

                {category.id === "bites" ? (
                  <div className="note mb-4 px-4 py-4 sm:px-5">
                    <p className="font-display text-xl text-ink">Home meals</p>
                    <p className="mt-1 text-sm leading-relaxed text-cocoa sm:text-base">
                      Cooked fresh · Delivered to your door. Message us what you’re craving.
                    </p>
                  </div>
                ) : null}

                <div
                  className={
                    category.id === "bites"
                      ? "grid gap-3 sm:grid-cols-2"
                      : category.wide
                        ? "grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
                        : "grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
                  }
                >
                  {category.items.map((item) => (
                    <Dish key={item.name} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <figure className="mx-auto max-w-6xl px-4 sm:px-6">
          <img
            src="/images/spread.jpg"
            alt="A table of cake, cupcakes, waffles, doughnuts, cookies, spring rolls, juice and yogurt"
            className="aspect-video w-full rounded-card object-cover"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-3 text-center text-sm font-semibold tracking-wide text-cocoa">
            Freshly prepared · Quality ingredients · Your satisfaction matters
          </figcaption>
        </figure>

        <section id="why" className="mt-14 bg-ink text-foam sm:mt-20">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <p className="text-sm font-semibold tracking-widest text-gold uppercase">Why choose us</p>
            <h2 className="mt-2 max-w-xl font-display text-4xl sm:text-5xl">
              Good food. Great drinks. Happy moments.
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-card border border-foam/15 bg-chocolate p-5">
                    <Icon className="size-6 text-gold" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-2xl leading-tight">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foam/80">{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="order" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid overflow-hidden rounded-card bg-chocolate text-foam lg:grid-cols-2">
            <div className="p-6 sm:p-10">
              <p className="text-sm font-semibold tracking-widest text-gold uppercase">Order</p>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl">Hungry? We’re a message away.</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-foam/80">
                WhatsApp is the fastest way to order cakes, weekend plates, and drinks. Pre-order for
                weekend meals recommended.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                <MapPin className="size-4" aria-hidden="true" />
                Sunyani
              </p>
            </div>
            <div className="flex flex-col gap-3 bg-ink p-6 sm:p-10">
              <ButtonLink href={orderHref} target="_blank" rel="noopener noreferrer" size="lg" full>
                <WhatsAppIcon className="size-5" />
                WhatsApp {WHATSAPP_DISPLAY}
              </ButtonLink>
              {phones.map((phone) => (
                <ButtonLink key={phone.href} href={phone.href} variant="foam" size="lg" full>
                  <Phone className="size-5" aria-hidden="true" />
                  Call {phone.display}
                </ButtonLink>
              ))}
              <p className="pt-1 text-sm leading-relaxed text-foam/75">
                Pre-order for weekend meals recommended — jollof and fried rice go quickly.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-foam">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl text-ink">
              YEHLIN <span className="text-gold-deep">BBB</span>
            </p>
            <p className="mt-1 text-sm text-cocoa">Bakes, Bites & Brews · Sunyani</p>
            <p className="mt-3 max-w-sm font-display text-lg text-chocolate italic">
              Tasty treats for every mood.
            </p>
          </div>
          <div className="text-sm text-cocoa">
            <a
              className="inline-flex min-h-11 items-center font-semibold text-chocolate"
              href={orderHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <div className="flex flex-col">
              {phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="inline-flex min-h-11 items-center font-semibold text-chocolate"
                >
                  {phone.display}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="border-t border-line px-4 py-4 text-center text-xs font-semibold tracking-wide text-cocoa sm:text-sm">
          Freshly prepared · Quality ingredients · Your satisfaction matters
        </p>
      </footer>

      <div className="dock fixed inset-x-0 bottom-0 z-40 border-t border-line bg-foam/95 p-3 backdrop-blur md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <ButtonLink href={orderHref} target="_blank" rel="noopener noreferrer" size="lg" full>
            <WhatsAppIcon className="size-5" />
            WhatsApp
          </ButtonLink>
          <ButtonLink href={phones[0].href} variant="chocolate" size="lg" full>
            <Phone className="size-5" aria-hidden="true" />
            Call
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
