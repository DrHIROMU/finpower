export function getFormStringValue(formData: FormData, key: string): string {
  return (formData.get(key) as string) ?? "";
}

export function getFormNumberValue(formData: FormData, key: string): number {
  const value = formData.get(key);
  if (!value) {
    return 0;
  }
  const numberValue = Number(value);
  if (isNaN(numberValue)) {    
    throw new Error(`欄位 ${key} 必須是數字`);
  }
  return numberValue;
}
