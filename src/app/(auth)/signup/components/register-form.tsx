'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { AuthSchema, authSchema } from '@/schemas/auth-schema';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';

interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  const form = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: AuthSchema) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label>Email</Label>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email address..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Continue with email
        </Button>
        {form.formState.errors.email && (
          <p className="text-sm text-center text-destructive">
            {form.formState.errors.email.message}
          </p>
        )}
      </form>
    </Form>
  );
};

export default RegisterForm;
