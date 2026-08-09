import { useToast } from '@shared/hooks/useToast';
import { GoogleIcon, MicrosoftIcon } from '@shared/components/icons';

const providers = [
  { label: 'Google', Icon: GoogleIcon },
  { label: 'Microsoft', Icon: MicrosoftIcon },
];

const SocialAuthButtons = () => {
  const toast = useToast();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-border-subtle" />
        <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-content-muted">Or continue with</span>
        <span className="h-px flex-1 bg-border-subtle" />
      </div>

      {providers.map(({ label, Icon }) => (
        <button
          key={label}
          type="button"
          onClick={() => toast.info(`${label} sign-in is not available yet`, { description: 'Use your email and password for now.' })}
          className="flex h-12 w-full items-center justify-center gap-2.5 rounded-lg border border-border-subtle bg-surface text-sm font-semibold text-content transition-colors hover:bg-surface-muted"
        >
          <Icon className="size-[18px]" />
          {label}
        </button>
      ))}
    </div>
  );
};

export default SocialAuthButtons;
