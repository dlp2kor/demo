Feature: Product details- PMT Sharing platform

   view details of each product list 

   Scenario Outline: Saas product details
   Given user is on Saas page
   When user clicks on the "<product_name>" product and "<view_details>" of product
   Then user should be able to see "<product_overview>" page
   And user navigates to "<product_pricing>" page

   Examples:
   | product_name | view_details                                                                            | product_overview                                                                                             | product_pricing                                                                                             |
   | SaaS Product 350|:nth-child(1) > .MuiPaper-root > .MuiCardContent-root > :nth-child(5) > .MuiButton-root|https://qa-tools.mobilitymarketplace.io/saas/saas-product-350/overview/8a80c0668a353d77018a4077bce70017#overview| https://qa-tools.mobilitymarketplace.io/saas/saas-product-350/overview/8a80c0668a353d77018a4077bce70017#pricing|
   | SaaSProduct1 | :nth-child(4) > .MuiPaper-root > .MuiCardContent-root > :nth-child(5) > .MuiButton-root | https://qa-tools.mobilitymarketplace.io/saas/saasproduct1/overview/8a80c03e89350d96018943a35d2b01a1#overview | https://qa-tools.mobilitymarketplace.io/saas/saasproduct1/overview/8a80c03e89350d96018943a35d2b01a1#pricing |
   | SABAT        | :nth-child(3) > .MuiPaper-root > .MuiCardContent-root > :nth-child(5) > .MuiButton-root | https://qa-tools.mobilitymarketplace.io/saas/sabat/overview/8a80c019887bfb7c01888b9125c9041e#overview        | https://qa-tools.mobilitymarketplace.io/saas/sabat/overview/8a80c019887bfb7c01888b9125c9041e#pricing        |
   | DocHub       | :nth-child(2) > .MuiPaper-root > .MuiCardContent-root > :nth-child(5) > .MuiButton-root | https://qa-tools.mobilitymarketplace.io/saas/dochub/overview/8a80c056887ec56401888b62825a027c#overview       | https://qa-tools.mobilitymarketplace.io/saas/dochub/overview/8a80c056887ec56401888b62825a027c#pricing       |
   | SaasProduct 355| :nth-child(5) > .MuiPaper-root > .MuiCardContent-root > :nth-child(5) > .MuiButton-root | https://qa-tools.mobilitymarketplace.io/saas/saas-product-355/overview/8a80c1d48a353b0c018a40c20a110017#overview| https://qa-tools.mobilitymarketplace.io/saas/saas-product-355/overview/8a80c1d48a353b0c018a40c20a110017#pricing|
   | Saas Product 370| :nth-child(6) > .MuiPaper-root > .MuiCardContent-root > :nth-child(5) > .MuiButton-root | https://qa-tools.mobilitymarketplace.io/saas/saas-product-370/overview/8a80c09b8a353f26018a40c9444a000e#overview| https://qa-tools.mobilitymarketplace.io/saas/saas-product-370/overview/8a80c09b8a353f26018a40c9444a000e#pricing|


   Scenario Outline: Paas product details
   Given user is on Paas page
   When user clicks on the "<product_name>" product and "<view_details>" of product
   Then user should be able to see "<product_overview>" page
   And user navigates to "<product_pricing>" page

   Examples:
   | product_name | view_details                                                                            | product_overview                                                                                             | product_pricing                                                                                             |
   | PaasProduct1|:nth-child(1) > .MuiPaper-root > .MuiCardContent-root > :nth-child(5) > .MuiButton-root|https://qa-tools.mobilitymarketplace.io/paas/paasproduct1/overview/8a80c0ec8939ef3f018943afea180150#overview| https://qa-tools.mobilitymarketplace.io/paas/paasproduct1/overview/8a80c0ec8939ef3f018943afea180150#pricing|
   | Paas2 | :nth-child(2) > .MuiPaper-root > .MuiCardContent-root > :nth-child(5) > .MuiButton-root | https://qa-tools.mobilitymarketplace.io/paas/paas2/overview/8a80c1d28932171a0189440baa7d0376#overview | https://qa-tools.mobilitymarketplace.io/paas/paas2/overview/8a80c1d28932171a0189440baa7d0376#pricing |
   | Paas4       | :nth-child(3) > .MuiPaper-root > .MuiCardContent-root > :nth-child(5) > .MuiButton-root | https://qa-tools.mobilitymarketplace.io/paas/paas4/overview/8a80c1ec89321605018948bad1c603d7#overview        | https://qa-tools.mobilitymarketplace.io/paas/paas4/overview/8a80c1ec89321605018948bad1c603d7#pricing        |
   | PaaS Product 0002       | :nth-child(4) > .MuiPaper-root > .MuiCardContent-root > :nth-child(5) > .MuiButton-root | https://qa-tools.mobilitymarketplace.io/paas/paas-product-0002/overview/8a80c0668a353d77018a4a17e6b6002f#overview       | https://qa-tools.mobilitymarketplace.io/paas/paas-product-0002/overview/8a80c0668a353d77018a4a17e6b6002f#pricing       |