export default {
    items: [{
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
        },
        {
            name: 'Scope',
            url: '/dashboard',
            icon: 'icon-star'
        },
        {
            name: 'Overview',
            url: '/dashboard',
            icon: 'icon-cursor'
        },
        {
            name: 'Dynamics',
            url: '/dashboard',
            icon: 'icon-puzzle',
            children: [{
                    name: 'Drivers',
                    url: '/dashboard',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Restraints',
                    url: '/dashboard',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Oppurtunities',
                    url: '/dashboard',
                    icon: 'icon-puzzle'
                },
                {
                    name: 'Porter\'s 5 Forces',
                    url: '/dashboard',
                    icon: 'icon-puzzle'
                }
            ]
        },
        {
            name: 'Report',
            url: '/dashboard',
            icon: 'icon-exclamation'
        },
        {
            name: 'Tables',
            url: '/dashboard',
            icon: 'icon-login'
        },
    ]
};
