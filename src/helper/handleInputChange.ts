const handleInputChange = (e: React.FormEvent<HTMLInputElement>, setFn: Function) =>
  setFn(() => {
    const target = e.target as HTMLInputElement;
    return target.value;
  });

export default handleInputChange;
