test("fetchData returns the correct data", () => {
  return expect(fetchData()).resolves.toBe(
    JSON.stringify({
      name: "Jon Snow",
      age: 30,
      email: "jonsnow@housestark.com",
    })
  );
});
