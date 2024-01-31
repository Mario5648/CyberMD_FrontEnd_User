function returnEnvironmentURL()
{
    let environment = localStorage.getItem("CYBERMD_ENVIRONMENT");

    if(environment == "LOCAL")
    {
        return `http://127.0.0.1:5000`
    }
    return 'https://thecybermd-testingapp-prod.azurewebsites.net'
}