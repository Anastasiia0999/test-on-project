export const LSService =  {
    setItem(name, value){
        try {
            if (window.localStorage) {
                localStorage.setItem(name, value);
            }
        } catch (e) {
            console.error(e);
        }
    },

    getItem(name){
        try {
            if (window.localStorage) {
                return localStorage.getItem(name);
            }
        } catch (e) {
            console.error(e);
        }
        return null;
    },

    removeItem(name) {
        try {
            if (window.localStorage) {
                localStorage.removeItem(name);
            }
        } catch (e) {
            console.error(e);
        }
    },

    clear() {
        try {
            if (window.localStorage) {
                localStorage.clear();
            }
        } catch (e) {
            console.error(e);
        }
    },

    isLSAvailable() {
        try {
            window.localStorage.setItem('localStorage_feature_test', 'yes');
            const result = window.localStorage.getItem('localStorage_feature_test');
            window.localStorage.removeItem('localStorage_feature_test');
            if (result === 'yes') {
                return true;
            }
        } catch (e) {
            console.error(e);
        }
        return false;
    }
};
