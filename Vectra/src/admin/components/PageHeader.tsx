type PageHeaderProps = {
  title: string;
  subtitle: string;
  buttonText?: string;
};

export default function PageHeader({ title, subtitle, buttonText }: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-500">{subtitle}</p>
      </div>
      {buttonText && (
        <button className="rounded bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700">
          {buttonText}
        </button>
      )}
    </div>
  );
}
