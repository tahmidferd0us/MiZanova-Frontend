import { useMemo, useState } from 'react';
import { cn } from '@shared/utils/cn';
import { SearchIcon } from '@shared/components/icons';
import EmptyState from '@shared/components/feedback/EmptyState';
import PageNav from '@shared/components/layout/PageNav';
import ResourceCard from '../components/resources/ResourceCard';
import ResourcePager from '../components/resources/ResourcePager';
import { RESOURCES, RESOURCE_TYPES } from '../data/resources';

const TOTAL_LIBRARY = 142;
const TOTAL_PAGES = 12;

const ResourcesPage = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);

  const results = useMemo(() => {
    const query = search.trim().toLowerCase();
    const matched = RESOURCES.filter(
      (resource) => (filter === 'All' || resource.filter === filter) && (!query || `${resource.title} ${resource.description} ${resource.author}`.toLowerCase().includes(query)),
    );

    return sort === 'oldest' ? [...matched].reverse() : matched;
  }, [search, filter, sort]);

  const isFiltered = filter !== 'All' || search.trim().length > 0;

  return (
    <>
      <section className="bg-canvas px-4 py-12 sm:px-6 lg:px-20 lg:py-16">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6">
          <header className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-balance text-[2rem] font-bold leading-[1.15] tracking-[-0.02em] text-content sm:text-[2.5rem] lg:text-5xl">Resources for inclusive learning</h1>
            <p className="text-sm text-content-muted sm:text-base">Articles, video courses, toolkits, and research on neurodiversity in education</p>
          </header>

          <label className="relative flex w-full max-w-[520px] items-center">
            <SearchIcon className="pointer-events-none absolute left-3.5 size-5 text-content-muted" />
            <span className="sr-only">Search resources</span>
            <input
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
              placeholder="Search resources..."
              className="h-12 w-full rounded-lg border border-border-subtle bg-surface pl-11 pr-4 text-sm text-content placeholder:text-content-muted/70 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            />
          </label>

          <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <ul className="flex flex-wrap gap-2">
              {RESOURCE_TYPES.map((type) => (
                <li key={type}>
                  <button
                    type="button"
                    onClick={() => {
                      setFilter(type);
                      setPage(1);
                    }}
                    aria-pressed={filter === type}
                    className={cn(
                      'min-h-9 rounded-full px-4 text-xs font-semibold transition-colors',
                      filter === type ? 'bg-cta text-white' : 'border border-border-subtle bg-surface text-content-muted hover:bg-surface-muted',
                    )}
                  >
                    {type}
                  </button>
                </li>
              ))}
            </ul>

            <label className="flex shrink-0 items-center gap-2 text-xs text-content-muted">
              Sort:
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="h-9 rounded-lg border border-border-subtle bg-surface px-2 text-xs font-medium text-content"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 pb-16 sm:px-6 lg:px-20 lg:pb-20">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
          {results.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
            </div>
          ) : (
            <EmptyState title="No resources found" description="Try a different search term or clear the filters to see the full library." />
          )}

          {results.length > 0 && (
            <ResourcePager
              page={page}
              totalPages={isFiltered ? 1 : TOTAL_PAGES}
              shown={results.length}
              total={isFiltered ? results.length : TOTAL_LIBRARY}
              onPageChange={setPage}
            />
          )}
        </div>
      </section>

      <PageNav />
    </>
  );
};

export default ResourcesPage;
