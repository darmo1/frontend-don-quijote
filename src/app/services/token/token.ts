

export const tokenService = async ( clientId: string, clientSecret: string ) => {
  try{
    const url = ''
    const body = ``
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'applicacion/x-www-form-urlencoded',
        Accep: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
      },
      body
    };

    const res = await fetch(url, config);
    return (await res.json()) as Promise<{}>
  }catch(error){
    throw error
  }
}