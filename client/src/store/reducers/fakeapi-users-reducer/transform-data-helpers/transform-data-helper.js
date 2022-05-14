export const _transformPersons = (persons) => {
  return persons?.map((person) => {
    return {
      id: person.id,
      name: person.name,
      email: person.email,
      phone: person.phone
    };
  });
};
