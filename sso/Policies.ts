module Policies {

    export function verifyHost(host: string | undefined, hostValue: string) {
        return (host != hostValue) ? false : true;
    }

    export function verifyApiKey(apiKey: string | undefined, keyValue: string) {
        let response = { error: true, msg: "No API Key", status: 403 };

        if (apiKey) {
            if (apiKey !== keyValue) {
                response.status = 401;
                response.msg = "Not a valid API Key";
            } else {
                response.error = false;
            }
        }

        return response;
    }

    export function verification(apiKey: string | undefined, key: string, apiHost: string | undefined, host: string): any{
        let response = { error: false, msg: '', status: 200 };
    
        if (!verifyHost(apiHost, host)) {
            response.error = true;
            response.msg = 'Not an Authorized host';
            response.status = 401;
        }

        if (!response.error) {
            const apiKeyVerification = verifyApiKey(apiKey, key);
            if (apiKeyVerification.error) {
                response.error = true;
                response.msg = apiKeyVerification.msg;
                response.status = apiKeyVerification.status;
            }
        }
        return response;
    }
}

export default Policies;