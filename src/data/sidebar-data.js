import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as HiIcons from 'react-icons/hi'
import * as MdIcons from 'react-icons/md'
import * as RiIcons from 'react-icons/ri'
import * as ImIcons from 'react-icons/im'

export const SidebarData = [
    {
       id: 'dashboard',
       title: 'Dashboard',
       path: '/dashboard',
       isShowed: true,
       isAllowed: true,
       icon: <AiIcons.AiFillDashboard />
    },
    {
       id: 'hq',
       title: 'HQ',
       isShowed: false,
       isAllowed: false,
       childs: [
          {
             id: 'hq_stockist',
             isShowed: false,
             isAllowed: false
          },
          {
             id: 'hq_dropship_affiliate',
             isShowed: false,
             isAllowed: false
          }
       ]
    },
    {
        id: 'agent',
        title: 'Agent',
        isShowed: true,
        isAllowed: false,
        icon: <ImIcons.ImUserTie />,
        iconClosed: <HiIcons.HiArrowNarrowDown />,
        iconOpened: <HiIcons.HiArrowNarrowUp />,
        childs: [
            {
                id: 'my_purchase',
                title: 'My Purchase',
                path: '/agent/my-purhcase',
                isShowed: true,
                isAllowed: true
            }
        ]
    },
    {
        id: 'orders',
        title: 'Orders',
        path: '/orders',
        isShowed: true,
        isAllowed: true,
        icon: <AiIcons.AiFillShopping />
    },
    {
        id: 'products',
        title: 'Products',
        path: '/products',
        isShowed: true,
        isAllowed: true,
        icon: <FaIcons.FaBox />,
        iconClosed: <HiIcons.HiArrowNarrowDown />,
        iconOpened: <HiIcons.HiArrowNarrowUp />,
        childs: [
            {
                id: 'product-allproduct',
                title: 'All Product',
                path: '/products/all',
                isShowed: true,
                isAllowed: true,
                iconClosed: <HiIcons.HiArrowNarrowDown />,
                iconOpened: <HiIcons.HiArrowNarrowUp />,
                childs: [
                    {
                        id: 'product-add',
                        title: 'Add Product',
                        path: '/products/add',
                        isShowed: true,
                        isAllowed: true
                    },
                    {
                        id: 'product-import',
                        isShowed: false,
                        isAllowed: false
                    }
                ]
            },
            {
                id: 'product-categories',
                title: 'Product Categories',
                path: '/products/categories',
                isShowed: true,
                isAllowed: true
            },
            {
                id: 'product-variations',
                title: 'Product Variations',
                path: '/products/variations',
                isShowed: true,
                isAllowed: true
            },
            {
                id: 'product-collections',
                title: 'Product Collections',
                path: '/products/collections',
                isShowed: true,
                isAllowed: true
            }
        ]
    },
    {
        id: 'webstore',
        title: 'Webstore',
        path: '/webstore',
        isShowed: true,
        isAllowed: true,
        icon: <FaIcons.FaStore />,
        iconClosed: <HiIcons.HiArrowNarrowDown />,
        iconOpened: <HiIcons.HiArrowNarrowUp />,
        childs: [
            {
                id: 'settings',
                title: 'Setting',
                path: '/webstore/settings',
                isShowed: true,
                isAllowed: true,
                iconClosed: <HiIcons.HiArrowNarrowDown />,
                iconOpened: <HiIcons.HiArrowNarrowUp />,
                childs: [
                    {
                        id: 'webstore-domain',
                        title: 'Domain',
                        path: '/webstore/domain',
                        isShowed: true,
                        isAllowed: true,
                        iconClosed: <HiIcons.HiArrowNarrowDown />,
                        iconOpened: <HiIcons.HiArrowNarrowUp />,
                        childs: [
                            {
                                id: 'default-domain',
                                title: 'Default Domain',
                                path: '/webstore/domain/default',
                                isShowed: true,
                                isAllowed: true
                            },
                            {
                                id: 'custom-domain',
                                title: 'Custom Domain',
                                path: '/webstore/domain/custom',
                                isShowed: true,
                                isAllowed: false
                            },
                            {
                                id: 'request-custom-domain',
                                isShowed: false,
                                isAllowed: false
                            }
                        ]
                    },
                    {
                        id: 'webstore-logo',
                        title: 'Logo',
                        path: '/webstore/logo',
                        isShowed: true,
                        isAllowed: true
                    },
                    {
                        id: 'webstore-profile-photo',
                        title: 'Profile Photo',
                        path: '/webstore/profile-photo',
                        isShowed: true,
                        isAllowed: true
                    },
                    {
                        id: 'webstore-slider',
                        title: 'Webstore Slider',
                        path: '/webstore/slider',
                        isShowed: true,
                        isAllowed: true
                    },
                    {
                        id: 'webstore-mobile-friendly',
                        title: 'Webstore Mobile Friendly',
                        path: '/webstore/mobile-friendly',
                        isShowed: true,
                        isAllowed: true
                    },
                    {
                        id: 'infinite-scroll',
                        title: 'Infinite Scroll',
                        path: '/webstore/infinite-scroll',
                        isShowed: true,
                        isAllowed: true
                    },
                    {
                        id: 'home-page-product-display',
                        title: 'Home Page Product Display',
                        path: '/webstore/home-page-product-display',
                        isShowed: true,
                        isAllowed: false
                    },
                    {
                        id: 'show-filter-control',
                        title: 'Show Filter Control',
                        path: '/webstore/show-filter-control',
                        isShowed: true,
                        isAllowed: false
                    }
                ]
                },
            {
                id: 'google-analytic',
                title: 'Google Analytic',
                path: '/webstore/google-analytic',
                isShowed: true,
                isAllowed: true
            },
            {
                id: 'themes',
                title: 'Themes',
                path: '/webstore/themes',
                isShowed: true,
                isAllowed: true
            },
            {
                id: 'pages',
                title: 'Pages',
                path: '/webstore/pages',
                isShowed: true,
                isAllowed: true
            },
            {
                id: 'seo',
                title: 'SEO',
                path: '/webstore/seo',
                isShowed: true,
                isAllowed: true
            },
            {
                id: 'checkout-additional-info',
                title: 'Checkout Additional Info',
                path: '/webstore/checkout-additional-info',
                isShowed: true,
                isAllowed: false
            },
            {
                id: 'store-newsletter',
                title: 'Store Newsletter',
                path: '/webstore/store-newsletter',
                isShowed: true,
                isAllowed: false
            }
        ]
    },
    {
        id: 'settings',
        title: 'Settings',
        path: '/settings',
        isShowed: true,
        isAllowed: true,
        icon: <AiIcons.AiFillSetting />,
        iconClosed: <HiIcons.HiArrowNarrowDown />,
        iconOpened: <HiIcons.HiArrowNarrowUp />,
        childs: [
            {
                id: 'shop-manager',
                title: 'Shop Manager',
                path: '/settings/shop-manager',
                isShowed: false,
                isAllowed: false
            },
            {
                id: 'store-information',
                title: 'Store Information',
                path: '/settings/store-information',
                isShowed: false,
                isAllowed: true
            },
            {
                id: 'shipping',
                title: 'Shipping',
                path: '/settings/shipping',
                isShowed: true,
                isAllowed: true,
                iconClosed: <HiIcons.HiArrowNarrowDown />,
                iconOpened: <HiIcons.HiArrowNarrowUp />,
                childs: [
                    {
                    id: 'couriers',
                    title: 'Couriers',
                    path: '/settings/shipping/couriers',
                    isShowed: true,
                    isAllowed: true,
                    iconClosed: <HiIcons.HiArrowNarrowDown />,
                    iconOpened: <HiIcons.HiArrowNarrowUp />,
                    childs: [
                        {
                            id: 'poslaju',
                            title: 'Pos Laju',
                            path: '/settings/shipping/couriers/poslaju',
                            isShowed: false,
                            isAllowed: false
                        },
                        {
                            id: 'poslaju_international',
                            title: 'Pos Laju International',
                            path: '/settings/shipping/couriers/poslaju-international',
                            isShowed: false,
                            isAllowed: false
                        },
                        {
                            id: 'citylink',
                            isShowed: false,
                            isAllowed: false
                        },
                        {
                            id: 'flexipack',
                            title: 'Flexipack',
                            path: '/settings/shipping/couriers/flexipack',
                            isShowed: false,
                            isAllowed: false
                        },
                        {
                            id: 'janio',
                            title: 'Janio',
                            path: '/settings/shipping/couriers/janio',
                            isShowed: true,
                            isAllowed: false
                        },
                        {
                            id: 'jne_domestic_regular',
                            title: 'JNE Domestic Regular',
                            path: '/settings/shipping/couriers/jne-domestic-regular',
                            isShowed: true,
                            isAllowed: true
                        },
                        {
                            id: 'shipper',
                            title: 'Shipper',
                            path: '/settings/shipping/couriers/shipper',
                            isShowed: true,
                            isAllowed: false
                        }
                    ]
                    }
                ]
            },
            {
                id: 'payment',
                title: 'Payment',
                path: '/settings/payment',
                isShowed: true,
                isAllowed: true,
                iconClosed: <HiIcons.HiArrowNarrowDown />,
                iconOpened: <HiIcons.HiArrowNarrowUp />,
                childs: [
                    {
                        id: 'avapay',
                        title: 'Ava Pay',
                        path: '/settings/payment/avapay',
                        isShowed: true,
                        isAllowed: true
                    },
                    {
                        id: 'credit-card',
                        title: 'Credit Card',
                        path: '/settings/payment/credit-card',
                        isShowed: true,
                        isAllowed: false
                    },
                    {
                        id: 'paypal',
                        title: 'Paypal',
                        path: '/settings/payment/paypal',
                        isShowed: false,
                        isAllowed: false
                    },
                    {
                        id: 'molpay',
                        title: 'Molpay',
                        path: '/settings/payment/molpay',
                        isShowed: false,
                        isAllowed: false
                    },
                    {
                        id: 'manual-payment',
                        title: 'Manual Payment',
                        path: '/settings/payment/manual-payment',
                        isShowed: true,
                        isAllowed: false
                    }
                ]
            },
            {
                id: 'invoicing',
                title: 'Invoicing',
                path: '/settings/invoicing',
                isShowed: true,
                isAllowed: true,
                icon: <FaIcons.FaFileInvoice />
            },
            {
                id: 'developer',
                title: 'Developer',
                path: '/settings/developer',
                isShowed: true,
                isAllowed: false,
                icon: <MdIcons.MdDeveloperMode />
            },
            {
                id: 'tax-information',
                title: 'Tax Information',
                path: '/settings/tax-information',
                isShowed: true,
                isAllowed: true,
                icon: <RiIcons.RiBillFill />
            }
        ]
    },
    // {
    //     id: 'modules',
    //     title: 'Modules',
    //     path: '/modules',
    //     isShowed: true,
    //     isAllowed: true,
    //     icon: <MdIcons.MdViewModule />,
    //     iconClosed: <HiIcons.HiArrowNarrowDown />,
    //     iconOpened: <HiIcons.HiArrowNarrowUp />,
    //     childs: [
    //         {
    //             id: 'all-module',
    //             title: 'All Modules',
    //             path: '/modules/all',
    //             isShowed: true,
    //             isAllowed: true
    //         },
    //         {
    //             id: 'google-shopping',
    //             title: 'Google Shopping',
    //             path: '/modules/google-shopping',
    //             isShowed: true,
    //             isAllowed: true
    //         },
    //         {
    //             id: 'coupon-code',
    //             title: 'Coupon Code',
    //             path: '/modules/coupon-code',
    //             isShowed: true,
    //             isAllowed: true
    //         },
    //         {
    //             id: 'facebook',
    //             title: 'Facebook',
    //             path: '/modules/facebook',
    //             isShowed: true,
    //             isAllowed: true,
    //             iconClosed: <HiIcons.HiArrowNarrowDown />,
    //             iconOpened: <HiIcons.HiArrowNarrowUp />,
    //             childs: [
    //                 {
    //                     id: 'facebook-marketing',
    //                     title: 'Facebook Marketing',
    //                     path: '/modules/facebook/facebook-marketing',
    //                     isShowed: true,
    //                     isAllowed: false
    //                 },
    //                 {
    //                     id: 'facebook-page',
    //                     title: 'Facebook Page',
    //                     path: '/modules/facebook/facebook-page',
    //                     isShowed: true,
    //                     isAllowed: true,
    //                     iconClosed: <HiIcons.HiArrowNarrowDown />,
    //                     iconOpened: <HiIcons.HiArrowNarrowUp />,
    //                     childs: [
    //                         {
    //                             id: 'fb-link-to-page',
    //                             title: 'Facebook Link To Page',
    //                             path: '/modules/facebook/facebook-page/link',
    //                             isShowed: true,
    //                             isAllowed: true
    //                         },
    //                         {
    //                             id: 'fb-unlink-page',
    //                             title: 'Facebook Unlink To Page',
    //                             path: '/modules/facebook/facebook-page/unlink',
    //                             isShowed: true,
    //                             isAllowed: true
    //                         },
    //                         {
    //                             id: 'fb-change-adaccount',
    //                             title: 'Facebook Change Ad Account',
    //                             path: '/modules/facebook/facebook-page/change-ad-account',
    //                             isShowed: true,
    //                             isAllowed: true
    //                         },
    //                         {
    //                             id: 'fb-shop',
    //                             title: 'Facebook Shop',
    //                             path: '/modules/facebook/facebook-page/shop',
    //                             isShowed: true,
    //                             isAllowed: true
    //                         },
    //                         {
    //                             id: 'auto-pm-order',
    //                             title: 'Auto PM Order',
    //                             path: '/modules/facebook/facebook-page/change-ad-account',
    //                             isShowed: true,
    //                             isAllowed: true
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     id: 'facebook-fanpage-autorepy',
    //                     title: 'Facebook Fanpage Auto Repy',
    //                     path: '/modules/facebook/facebook-fanpage-autorepy',
    //                     isShowed: false,
    //                     isAllowed: false
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'instagram',
    //             isShowed: true,
    //             isAllowed: true,
    //             childs: [
    //                 {
    //                     id: 'instagram-connect',
    //                     isShowed: true,
    //                     isAllowed: true
    //                 },
    //                 {
    //                     id: 'instagram-comment-order',
    //                     isShowed: false,
    //                     isAllowed: false
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'messenger',
    //             isShowed: true,
    //             isAllowed: true,
    //             childs: [
    //                 {
    //                     id: 'messenger-settings',
    //                     isShowed: true,
    //                     isAllowed: false
    //                 },
    //                 {
    //                     id: 'messenger-blast',
    //                     isShowed: true,
    //                     isAllowed: false
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'blogspot',
    //             isShowed: true,
    //             isAllowed: true
    //         },
    //         {
    //             id: 'twitter',
    //             isShowed: true,
    //             isAllowed: true
    //         },
    //         {
    //             id: 'whatsapp',
    //             isShowed: true,
    //             isAllowed: true
    //         },
    //         {
    //             id: 'avacredit',
    //             isShowed: false,
    //             isAllowed: false
    //         },
    //         {
    //             id: 'avachat',
    //             isShowed: false,
    //             isAllowed: false
    //         }
    //     ]
    // }
];