let company = {
    name: 'Google',
    type: 'Головна компанія',
    platform: 'Пошукова система',
    sellsSolution: 'Рішення для роботи в інтернеті',
    clients: [
        {
            name: 'YouTobe',
            type: 'subCompany',
            uses: 'Пошук та завантаження відео',
            sells: 'Відеоконтент',
            partners: [
                {
                    name: 'Premium',
                    type: 'subSubCompany',
                    uses: 'Пошук та завантаження відео',
                    sells: 'Відеоконтент',
                },
                {
                    name: 'Base',
                    type: 'subSubCompany',
                    uses: 'Пошук та завантаження відео',
                    sells: 'Відеоконтент',
                    partners: [
                        {
                            name: 'Блогери',
                            type: 'subSubCompany',
                            uses: 'Створювати контент',
                            sells: 'Відеоконтент',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Maps',
            type: 'subCompany',
            uses: 'Для мандрівників',
            sells: 'API для інтеграції в інші платформи'
        }
    ]
};

function findValueByKey(obj, companyName) {
    if (obj.name === companyName) {
        return obj;
    }

    if (obj.clients) {
        for (let client of obj.clients) {
            let result = findValueByKey(client, companyName);
            if (result) {
                return result;
            }
            if (client.partners) {
                for (let partner of client.partners) {
                    let partnerResult = findValueByKey(partner, companyName);
                    if (partnerResult) {
                        return partnerResult;
                    }
                    if (partner.partners) {
                        for (let subPartner of partner.partners) {
                            let subPartnerResult = findValueByKey(subPartner, companyName);
                            if (subPartnerResult) {
                                return subPartnerResult;
                            }
                        }
                    }
                }
            }
        }
    }

    return null;
}

let subCompanyInfo = findValueByKey(company, 'Maps');
console.log(subCompanyInfo);
