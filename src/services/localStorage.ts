class SecureStorage {
    public async get(key: string) {
        return await localStorage.getItem(key);
    }
}
export default new SecureStorage;