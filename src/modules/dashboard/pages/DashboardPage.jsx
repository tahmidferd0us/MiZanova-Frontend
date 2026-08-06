import { useMemo, useState } from 'react';
import { useAuth } from '@modules/auth/hooks/useAuth';
import { useDisclosure } from '@shared/hooks/useDisclosure';
import { usePagination } from '@shared/hooks/usePagination';
import { useToast } from '@shared/hooks/useToast';
import { formatDateTime } from '@shared/utils/formatters';
import { Badge, Button, Card, FileUploader, Input, Modal, NumberInput, Select, Table } from '@shared/components/ui';

const sampleRows = Array.from({ length: 27 }, (_, index) => ({
  id: index + 1,
  name: `Module ${index + 1}`,
  owner: ['Design', 'Platform', 'Growth'][index % 3],
  status: ['active', 'draft', 'archived'][index % 3],
  updatedAt: new Date(Date.now() - index * 86400000).toISOString(),
}));

const statusVariants = { active: 'success', draft: 'warning', archived: 'neutral' };

const DashboardPage = () => {
  const { user } = useAuth();
  const toast = useToast();
  const modal = useDisclosure();
  const [files, setFiles] = useState([]);
  const [search, setSearch] = useState('');

  const filtered = useMemo(
    () => sampleRows.filter((row) => row.name.toLowerCase().includes(search.trim().toLowerCase())),
    [search],
  );

  const pagination = usePagination({ initialLimit: 10, total: filtered.length });
  const pageRows = filtered.slice((pagination.page - 1) * pagination.limit, pagination.page * pagination.limit);

  const columns = [
    { key: 'name', header: 'Module' },
    { key: 'owner', header: 'Owner' },
    { key: 'status', header: 'Status', render: (row) => <Badge variant={statusVariants[row.status]}>{row.status}</Badge> },
    { key: 'updatedAt', header: 'Last updated', align: 'right', render: (row) => formatDateTime(row.updatedAt) },
  ];

  return (
    <div className="container-page flex flex-col gap-6 py-8 sm:py-12">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-content sm:text-3xl">Dashboard</h1>
        <p className="text-sm text-content-muted">Signed in as {user?.email}</p>
      </header>

      <Card
        title="Modules"
        description="A table with pagination, search and mobile card fallback."
        actions={
          <>
            <Button variant="secondary" onClick={() => toast.info('Export queued', { description: 'You will be notified when it is ready.' })}>
              Export
            </Button>
            <Button onClick={modal.open}>New module</Button>
          </>
        }
        padded={false}
      >
        <div className="p-5 pb-0">
          <Input
            label="Search"
            placeholder="Filter by module name"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              pagination.onPageChange(1);
            }}
            wrapperClassName="max-w-sm"
          />
        </div>
        <div className="p-5">
          <Table columns={columns} data={pageRows} pagination={{ ...pagination, total: filtered.length }} className="shadow-none" />
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Attachments" description="Drag and drop, with size and type validation.">
          <FileUploader accept=".pdf,.png,.jpg,image/*" multiple maxSizeMb={5} maxFiles={4} value={files} onChange={setFiles} label="" />
        </Card>

        <Card title="Toast messages" description="Dispatched through Redux, rendered in a portal.">
          <div className="grid grid-cols-2 gap-2">
            <Button variant="secondary" onClick={() => toast.success('Saved successfully')}>
              Success
            </Button>
            <Button variant="secondary" onClick={() => toast.error('Could not save', { description: 'Check your connection and try again.' })}>
              Error
            </Button>
            <Button variant="secondary" onClick={() => toast.warning('Storage almost full')}>
              Warning
            </Button>
            <Button variant="secondary" onClick={() => toast.info('A new version is available')}>
              Info
            </Button>
          </div>
        </Card>
      </div>

      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title="New module"
        description="Every field below uses a shared form component."
        footer={
          <>
            <Button variant="secondary" onClick={modal.close}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                modal.close();
                toast.success('Module created');
              }}
            >
              Create
            </Button>
          </>
        }
      >
        <div className="flex flex-col gap-4">
          <Input label="Module name" placeholder="Billing" required />
          <NumberInput label="Seat limit" min={1} max={500} suffix="seats" defaultValue={10} />
          <Select
            label="Owner team"
            options={[
              { value: 'design', label: 'Design' },
              { value: 'platform', label: 'Platform' },
              { value: 'growth', label: 'Growth' },
            ]}
          />
        </div>
      </Modal>
    </div>
  );
};

export default DashboardPage;
