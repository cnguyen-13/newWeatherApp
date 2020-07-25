const formatTime = require("../../HelperFunctions/formatTime");

test("Testing formatTime Function: Hours", () => {
    expect(formatTime(0, "hours")).toBe("12");
    expect(formatTime(1, "hours")).toBe("01");
    expect(formatTime(2, "hours")).toBe("02");
    expect(formatTime(3, "hours")).toBe("03");
    expect(formatTime(4, "hours")).toBe("04");
    expect(formatTime(5, "hours")).toBe("05");
    expect(formatTime(6, "hours")).toBe("06");
    expect(formatTime(7, "hours")).toBe("07");
    expect(formatTime(8, "hours")).toBe("08");
    expect(formatTime(9, "hours")).toBe("09");
    expect(formatTime(10, "hours")).toBe("10");
    expect(formatTime(11, "hours")).toBe("11");
    expect(formatTime(12, "hours")).toBe("12");
    expect(formatTime(13, "hours")).toBe("01");
    expect(formatTime(14, "hours")).toBe("02");
    expect(formatTime(15, "hours")).toBe("03");
    expect(formatTime(16, "hours")).toBe("04");
    expect(formatTime(17, "hours")).toBe("05");
    expect(formatTime(18, "hours")).toBe("06");
    expect(formatTime(19, "hours")).toBe("07");
    expect(formatTime(20, "hours")).toBe("08");
    expect(formatTime(21, "hours")).toBe("09");
    expect(formatTime(22, "hours")).toBe("10");
    expect(formatTime(23, "hours")).toBe("11");
});

test("Testing formatTime Function: Minutes", () => {});