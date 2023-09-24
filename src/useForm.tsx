import React from "react";
export default function useForm() {
  let _fields: any = {};
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => (a: any) => {
    console.log(e);
    console.log(a);
  };

  const register = (name: string, options = {}) => {
    _fields[name] = "hola";
    return {
      name,
      onChange,
      ref: (ref: HTMLInputElement | null): void => {
        if (ref) {
          register(name, options);
          // field = get(_fields, name)
        }
      },
    };
  };

  console.log(_fields);

  return { register };
}
