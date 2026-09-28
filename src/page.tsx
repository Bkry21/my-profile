import MobileNav from "./components/MobileNav";

const nav = [
  { href: "#ledger", label: "دفتر الأعمال" },
  { href: "#stack", label: "الأدوات" },
  { href: "#about", label: "نبذة" },
  { href: "#contact", label: "تواصل" },
];

type Status = "مُطلق" | "قيد التسويق" | "مُسلَّم" | "مكتمل";

const statusColor: Record<Status, string> = {
  "مُطلق": "bg-ledger-green",
  "قيد التسويق": "bg-brass",
  "مُسلَّم": "bg-ledger-green",
  "مكتمل": "bg-ledger-green",
};

const projects: {
  no: string;
  name: string;
  desc: string;
  stack: string;
  status: Status;
}[] = [
  {
    no: "01",
    name: "مندوبي",
    desc: "تطبيق موبايل لمناديب توزيع المصانع، يتابع الشحنات والديون ومبيعات الزبائن بالكامل دون اتصال إنترنت، عبر قاعدة بيانات دفترية لا تُعدّل السجلات بل تُراكمها.",
    stack: "React Native (Expo) · SQLite · Drizzle ORM",
    status: "قيد التسويق",
  },
  {
    no: "02",
    name: "نظام إدارة الصيدليات",
    desc: "نظام سطح مكتب لإدارة المخزون والمبيعات في الصيدليات، بتفعيل مرتبط بجهاز العميل وصلاحيات منفصلة للمدير والموظف.",
    stack: "Electron · React · SQLite",
    status: "قيد التسويق",
  },
  {
    no: "03",
    name: "نظام تأجير البدل",
    desc: "نظام سطح مكتب مبني من الصفر لإدارة تأجير البدل: الأصناف، الزبائن، الإيجارات، والإرجاع، بتصميم داكن مطعّم بالذهبي.",
    stack: "Electron · React · SQLite",
    status: "مُسلَّم",
  },
  {
    no: "04",
    name: "مصانع منار الغذائية",
    desc: "موقع تعريفي بهوية بصرية عربية كاملة وربط مباشر مع واتساب، لمصنع أغذية يبحث عن حضور رقمي احترافي.",
    stack: "React · Tailwind · Framer Motion",
    status: "مكتمل",
  },
  {
    no: "05",
    name: "Smart Fracing System",
    desc: "تطبيق ويب يتنبأ بالإنتاجية النهائية المقدَّرة لآبار الغاز الصخري عبر نموذج شبكة عصبية مدرَّب، من مشروع تخرج هندسة البترول.",
    stack: "Flask · Scikit-learn · ANN",
    status: "مكتمل",
  },
  {
    no: "06",
    name: "ShoeApp · SOLEX",
    desc: "تطبيق موبايل لمتجر أحذية مع موقع تعريفي مصاحب بتصميم فاخر، شمل سلة شراء ونظام مفضّلة وعروض متحركة.",
    stack: "Expo Router · React Native · Vite",
    status: "مكتمل",
  },
];

const stackGroups = [
  {
    title: "تطبيقات الموبايل",
    tools: ["React Native", "Expo", "SQLite", "Expo Router"],
  },
  {
    title: "أنظمة سطح المكتب",
    tools: ["Electron", "React", "Vite", "better-sqlite3", "Tailwind CSS"],
  },
  {
    title: "الذكاء الاصطناعي والباك-إند",
    tools: ["Python", "Flask", "Scikit-learn", "Render"],
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-rule bg-paper/90 backdrop-blur">
        <div className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-bold tracking-tight">
            بكري
            <span className="mx-2 text-xs font-normal text-muted">
              مطوّر برمجيات
            </span>
          </a>
          <nav className="hidden gap-8 text-sm text-ink-2 md:flex">
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-brass-dim"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <MobileNav />
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="border-b border-rule bg-ink text-paper">
          <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
            <p className="tabular text-xs tracking-[0.25em] text-brass">
              الخرطوم، السودان — يعمل عن بُعد
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.25] md:text-5xl">
              برمجيات عملية، تعمل حتى حين ينقطع الإنترنت
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-paper/75 md:text-lg">
              مطوّر مستقل أبني تطبيقات موبايل وأنظمة سطح مكتب لمصانع ومحلات
              وشركات في السودان — تعمل أوفلاين بالكامل، وتُصمَّم لواقع البنية
              التحتية المحلية لا رغم عنه.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-sm bg-brass px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-paper"
              >
                لنبدأ مشروعك
              </a>
              <a
                href="#ledger"
                className="rounded-sm border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper"
              >
                تصفّح دفتر الأعمال
              </a>
            </div>
          </div>
        </section>

        {/* Ledger / Projects */}
        <section id="ledger" className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between border-b border-rule pb-4">
            <div>
              <p className="tabular text-xs tracking-[0.2em] text-brass-dim">
                دفتر الأعمال
              </p>
              <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                كشف حساب المشاريع
              </h2>
            </div>
            <p className="tabular hidden text-xs text-muted md:block">
              {projects.length} قيود
            </p>
          </div>

          <div>
            {projects.map((p) => (
              <div
                key={p.no}
                className="ledger-row grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 py-6 md:grid-cols-[3.5rem_1fr_auto]"
              >
                <span className="tabular row-span-2 text-sm text-brass-dim md:row-span-1">
                  {p.no}
                </span>
                <div className="md:order-none">
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-ink-2">
                    {p.desc}
                  </p>
                  <p className="tabular mt-3 text-xs text-muted">{p.stack}</p>
                </div>
                <div className="col-span-2 flex items-center gap-2 md:col-span-1 md:justify-self-start">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${statusColor[p.status]}`}
                  />
                  <span className="tabular text-xs text-ink-2">
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="border-y border-rule bg-paper-2">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="tabular text-xs tracking-[0.2em] text-brass-dim">
              فلسفة العمل
            </p>
            <h2 className="mt-2 max-w-2xl text-2xl font-bold leading-tight md:text-3xl">
              أبني للواقع الذي يعمل فيه العميل، لا للواقع المثالي
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-ink-2 md:text-base">
              معظم عملي مبني على قاعدة بيانات دفترية: كل عملية تُسجَّل ولا
              تُمحى، والأرصدة تُحسب من السجل لا تُخزَّن كرقم قابل للتعديل. هذا
              التصميم نفسه هو ما يجعل التطبيق يعمل بثقة بلا إنترنت ثابت،
              ويُبقي لكل تاجر أو مندوب أو صيدلية سجلاً دقيقاً لأعماله يستطيع
              الرجوع إليه في أي لحظة.
            </p>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="mx-auto max-w-5xl px-6 py-20">
          <p className="tabular text-xs tracking-[0.2em] text-brass-dim">
            الأدوات
          </p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            ما أستخدمه لبناء كل مشروع
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {stackGroups.map((g) => (
              <div key={g.title} className="border-t-2 border-ink pt-4">
                <h3 className="font-bold">{g.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-ink-2">
                  {g.tools.map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-brass" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-rule bg-ink text-paper">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="tabular text-xs tracking-[0.2em] text-brass">
              نبذة
            </p>
            <h2 className="mt-2 max-w-2xl text-2xl font-bold md:text-3xl">
              من هندسة البترول إلى برمجة الأنظمة
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-paper/75 md:text-base">
              أُدعى بكري، من الخرطوم. درست هندسة البترول في جامعة الخرطوم،
              وأبرمج منذ عام 2018. اليوم أعمل مطوّراً مستقلاً، أصمّم واجهات
              المستخدم وأبني الأنظمة خلف الكواليس، من فكرة العميل إلى تطبيق
              يعمل في يده.
            </p>
          </div>
        </section>
      </main>

      {/* Contact */}
      <footer id="contact" className="bg-paper-2">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="tabular text-xs tracking-[0.2em] text-brass-dim">
            تواصل
          </p>
          <h2 className="mt-2 max-w-xl text-2xl font-bold leading-tight md:text-3xl">
            عندك فكرة نظام أو تطبيق لمشروعك؟
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ink-2">
            أخبرني عن طبيعة عملك وما تحتاجه، وسأرد عليك بخطة عملية للتنفيذ.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a
              href="https://wa.me/249000000000"
              className="rounded-sm bg-ink px-6 py-3 font-semibold text-paper transition-colors hover:bg-ink-2"
            >
              واتساب
            </a>
            <a
              href="mailto:hello@example.com"
              className="rounded-sm border border-ink px-6 py-3 font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              البريد الإلكتروني
            </a>
          </div>
        </div>
        <div className="border-t border-rule px-6 py-6 text-center text-xs text-muted">
          <span className="tabular">© {new Date().getFullYear()}</span> بكري
          — جميع الحقوق محفوظة
        </div>
      </footer>
    </div>
  );
}
