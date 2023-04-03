Feature('expect');

Scenario('test something',  ({ I }) => {
    I.expectEqual(1,1)
    I.expectContain('abc', 'a')
    I.expectGreaterThan(1,0)
    I.expectNotContain('abc', 'd')
    I.expectNotEqual(1,2)
    I.expectNotEmpty('notEmpty')
    I.expectToBeFalse(false)
    I.expectToBeTrue(true)
    I.expectToHaveProperty({a: 1}, 'a', 1)
});
