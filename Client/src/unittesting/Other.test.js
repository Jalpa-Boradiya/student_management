
// error handling

test('shows how async / await works', async () => {
    const success = await Promise.resolve(true);
    expect(success).toBe(true);

    const reject = await Promise.resolve(false);
    expect(reject).toBe(false);
});

