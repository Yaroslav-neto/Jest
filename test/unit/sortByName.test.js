const sorting = require("../../app");

describe("Books names test suite", () => {
  test("should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const expectedOutput = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    expect(sorting.sortByName(input)).toEqual(expectedOutput);
  });

  test('should handle empty array', () => {
    expect(sorting.sortByName([])).toEqual([]);
  });

  test('should handle array with one element', () => {
    expect(sorting.sortByName(["единственный"])).toEqual(["единственный"]);
  });

  test('should not change an already sorted array', () => {
    expect(sorting.sortByName(["a", "b", "c"])).toEqual(["a", "b", "c"]);
  });

  test('should handle array with identical elements', () => {
    expect(sorting.sortByName(["тест", "тест", "тест"])).toEqual(["тест", "тест", "тест"]);
  });

  test('сортирует массив с разными регистрами и одинаковыми элементами', () => {
    const input = ["Бэтмен", "амазонка", "Анабель", "бэтмен", "Амазонка"];
    const expected = ["Амазонка", "амазонка","Анабель", "Бэтмен", "бэтмен"];
    expect(sorting.sortByName([...input])).toEqual(expected);
  });
});