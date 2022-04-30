import axios from "axios";

export const findAllServices = async () => {
    const services = await axios.get('https://onlinetools.ups.com/ship/v1707/rating/Shop', {headers:
            {
                "Accept": "application/json",
                "AccessLicenseNumber": "6DB5790BA16136D2",
                "Username" : "diotte_am",
                "Password": "CHINAtownBUMboat69!"
            }});
    console.log(services);
}