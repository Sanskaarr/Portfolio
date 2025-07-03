alter table public.messages enable row level security;

create policy "Allow anyone to insert"
on public.messages
for insert
with check (true);

grant insert on public.messages to anon;