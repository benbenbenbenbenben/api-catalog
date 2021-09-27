export const get = async () => {
    return {
        body: { 
            time: Date.now().toString() 
        }
    }
}