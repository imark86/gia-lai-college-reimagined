-- Create table for admission registrations
CREATE TABLE public.admission_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  gender TEXT NOT NULL,
  id_card_number TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  address TEXT NOT NULL,
  high_school TEXT NOT NULL,
  graduation_year INTEGER NOT NULL,
  program_code TEXT NOT NULL,
  program_name TEXT NOT NULL,
  education_level TEXT NOT NULL DEFAULT 'Cao đẳng',
  priority_group TEXT,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.admission_registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public registration form)
CREATE POLICY "Anyone can submit registration" 
ON public.admission_registrations 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow users to view their own registrations by email
CREATE POLICY "Users can view own registrations" 
ON public.admission_registrations 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_admission_registrations_updated_at
BEFORE UPDATE ON public.admission_registrations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();