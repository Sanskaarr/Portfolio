-- Create RLS policy to allow public inserts to messages table
CREATE POLICY "Allow public inserts to messages" 
ON public.messages 
FOR INSERT 
WITH CHECK (true);

-- Ensure RLS is enabled on the messages table
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;