<script lang="ts">
	import type { RichTextContent } from '@graphcms/rich-text-types';

	import RichText from '$lib/RichText.svelte';

	const content: RichTextContent = {
		children: [
			{
				type: 'heading-one',
				children: [
					{
						text: 'Trade Program Terms'
					}
				]
			},
			{
				type: 'paragraph',
				children: [
					{
						bold: true,
						text: 'The Program.'
					},
					{
						text: ' We provide a discount up to an additional 10% off all regularly priced merchandise for purchases completed by participants in the Ashley Design Trade program at ashleyfurniture.com with a shipping or delivery address located within Alaska, Hawaii, or any of the 48 contiguous United States.'
					}
				]
			},
			{
				type: 'paragraph',
				children: [
					{
						bold: true,
						text: 'Participation.'
					},
					{
						text: ' To participate in the Ashley Design Trade program, you will need to submit an '
					},
					{
						href: 'https://www.ashleyfurniture.com/trade/',
						type: 'link',
						children: [
							{
								text: 'application'
							}
						],
						openInNewTab: false
					},
					{
						text: '. Interior designers, architects, set designers/stagers, home developers and professionals in the hospitality and food & beverage industries are eligible to apply to participate in the Ashley Design Trade program. You will need to provide at least two of the following:'
					}
				]
			},
			{
				type: 'paragraph',
				children: [
					{
						text: 'Proof of valid membership (e.g., current membership ID) to a design organization:'
					}
				]
			},
			{
				type: 'bulleted-list',
				children: [
					{
						type: 'list-item',
						children: [
							{
								type: 'list-item-child',
								children: [
									{
										text: 'American Society of Interior Designers or international affiliater'
									}
								]
							}
						]
					},
					{
						type: 'list-item',
						children: [
							{
								type: 'list-item-child',
								children: [
									{
										text: 'IIDA - International Interior Design Association'
									}
								]
							}
						]
					},
					{
						type: 'list-item',
						children: [
							{
								type: 'list-item-child',
								children: [
									{
										text: 'AIA - American Institute of Architects'
									}
								]
							}
						]
					},
					{
						type: 'list-item',
						children: [
							{
								type: 'list-item-child',
								children: [
									{
										text: 'IDS - Interior Design Society'
									}
								]
							}
						]
					},
					{
						type: 'list-item',
						children: [
							{
								type: 'list-item-child',
								children: [
									{
										text: 'CID - Certified Interior Decorators International'
									}
								]
							}
						]
					},
					{
						type: 'list-item',
						children: [
							{
								type: 'list-item-child',
								children: [
									{
										text: 'NKBA - National Kitchen & Bath Association (AKBD, CKD, CBD, CMKBD, or CMKBE)'
									}
								]
							}
						]
					},
					{
						type: 'list-item',
						children: [
							{
								type: 'list-item-child',
								children: [
									{
										text: 'IDC – Interior Designers of Canada'
									}
								]
							}
						]
					},
					{
						type: 'list-item',
						children: [
							{
								type: 'list-item-child',
								children: [
									{
										text: 'A staging organization, such as ASP, CSP, HSR, RESA'
									}
								]
							},
							{
								type: 'list-item-child',
								children: [
									{
										type: 'bulleted-list',
										children: [
											{
												type: 'list-item',
												children: [
													{
														type: 'list-item-child',
														children: [
															{
																text: 'Interior design certification (e.g., NCIDQ, CCIDC)'
															}
														]
													}
												]
											},
											{
												type: 'list-item',
												children: [
													{
														type: 'list-item-child',
														children: [
															{
																text: 'Current business license'
															}
														]
													}
												]
											},
											{
												type: 'list-item',
												children: [
													{
														type: 'list-item-child',
														children: [
															{
																text: 'Business card indicating your trade profession'
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				type: 'paragraph',
				children: [
					{
						text: 'Incomplete applications will not be accepted. We reserve the right to accept or reject applications for participation in the Ashley Design Trade program in our sole discretion. If we accept your application, we will provide you with a discount code that you may use for eligible purchases at ashleyfurniture.com.'
					}
				]
			},
			{
				type: 'paragraph',
				children: [
					{
						bold: true,
						text: 'Restrictions.'
					},
					{
						text: ' Participation in the Ashley Design Trade program is not transferable. Only you may use your discount code, and you must include the discount code upon checkout in order to receive the trade discount. You are not permitted to use the trade discount for personal purchases. Discount codes are limited to 5 time uses. If discount code has been used 5 times, trade program members may contact '
					},
					{
						href: 'mailto:trade@ashleyhomestore.com',
						type: 'link',
						children: [
							{
								text: 'trade@ashleyhomestore.com'
							}
						],
						openInNewTab: false
					},
					{
						text: ' to receive a new unique code.'
					}
				]
			},
			{
				type: 'paragraph',
				children: [
					{
						bold: true,
						text: 'Exclusions.'
					},
					{
						text: ' †Previous purchases excluded. Cannot be combined with any other offer or discount. Offer excludes CREATE Your Style Your Way, HomeStore Specials & Casper, Event Featured items, Online Specials, Bonus Deals, Beautyrest Black®, Tempur-Pedic®, Stearns & Foster®, Serta® iComfort®, Sealy® Posturepedic® Hybrid, Serta® Motion Essentials® and clearance/closeouts. Offer is nontransferable and does not apply to sales tax or shipping, In-Home Delivery and handling charges. Offer valid for sales within Alaska, Hawaii and the 48 contiguous United States.'
					}
				]
			},
			{
				type: 'paragraph',
				children: [
					{
						bold: true,
						text: 'Taxes.'
					},
					{
						text: ' We do not accept state resale certificates in connection with purchases made under the Ashley Design Trade program. All merchandise purchases are subject to sales tax in accordance with the current state and local tax rates for the shipping/delivery destination. Estimated sales tax is calculated at the time of purchase and is generally based on the total selling price of each item, which, depending on local and state laws, may include discounts and shipping and processing charges. To the extent any of the factors affecting the calculation of sales tax change between the time you place an order and the time your credit card is charged, the amount appearing on your order as estimated sales tax may differ from the sales taxes ultimately charged.'
					}
				]
			},
			{
				type: 'paragraph',
				children: [
					{
						bold: true,
						text: 'Terms and Conditions.'
					},
					{
						text: ' Purchases under the Ashley Design Trade program are subject to our Terms and Conditions and our '
					},
					{
						href: 'https://www.ashleyfurniture.com/terms_of_use/terms-of-use.html',
						type: 'link',
						children: [
							{
								text: 'Terms of Use'
							}
						],
						openInNewTab: false
					},
					{
						text: ', provided that the customer for purposes of '
					},
					{
						href: 'https://www.ashleyfurniture.com/customer_care/customer-care-page.html',
						type: 'link',
						children: [
							{
								text: 'Customer Care'
							}
						],
						openInNewTab: false
					},
					{
						text: ', '
					},
					{
						href: 'https://www.ashleyfurniture.com/returns/faq-returns.html',
						type: 'link',
						children: [
							{
								text: 'Returns'
							}
						],
						openInNewTab: false
					},
					{
						text: ', and '
					},
					{
						href: 'https://www.ashleyfurniture.com/warranty/warranty.html',
						type: 'link',
						children: [
							{
								text: 'Warranties'
							}
						],
						openInNewTab: false
					},
					{
						text: ' is the addressee for shipping/delivery, not the participant in the Ashley Design Trade program who makes a purchase on behalf of the customer.'
					}
				]
			},
			{
				type: 'paragraph',
				children: [
					{
						bold: true,
						text: 'Termination.'
					},
					{
						text: ' Misuse of your trade discount may result immediate deactivation of your discount code and termination of your participation in the Ashley Design Trade program. Misuse includes, without limitation: use of the trade discount for personal purchases, any resale of merchandise purchased using the trade discount through any retail outlet (e.g., resale on or through any retail or auction Web site or store), reimbursement of trade discount upon merchandise return, allowing others to use your discount code, and submitting false, expired or misleading information in connection with your participation application. Immediately upon our request, you will reimburse us for any losses we incur in connection with your misuse of your trade discount, including, without limitation, costs of collection and reasonable attorney’s fees.'
					}
				]
			},
			{
				type: 'paragraph',
				children: [
					{
						text: 'Additionally, we reserve the right to terminate your participation in the Ashley Design Trade program or cancel the Ashley Design Trade program at our sole discretion, with or without notice to you.'
					}
				]
			},
			{
				type: 'paragraph',
				children: [
					{
						bold: true,
						text: 'Contact us.'
					},
					{
						text: ' Please contact us if you have any questions, to check the status of your application, or to cancel your participation.'
					}
				]
			}
		]
	};
</script>

<RichText {content}>
	{#snippet p({children})}
		<p style="color: red;">{@render children()}</p>
	{/snippet}
</RichText>
