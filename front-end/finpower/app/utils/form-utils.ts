export function getFormStringValue(formData: FormData, key: string): string {
  return (formData.get(key) as string) ?? "";
}