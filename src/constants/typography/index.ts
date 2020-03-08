// Typography

export type FontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

const FontWeightReadable: {
  Thin: FontWeight;
  'Ultra Light': FontWeight;
  Light: FontWeight;
  Regular: FontWeight;
  Medium: FontWeight;
  Semibold: FontWeight;
  Bold: FontWeight;
  Heavy: FontWeight;
  Black: FontWeight;
} = { Thin: '100', 'Ultra Light': '200', Light: '300', Regular: '400', Medium: '500', Semibold: '600', Bold: '700', Heavy: '800', Black: '900' };

const pageModalTitleLargerFontSize = 34;
const pageModalTitleFontSize = 17;
const titleFontSize = 17;
const headerFontSize = 15;
const paragraphLinkFontSize = 17;
const secondaryFontSize = 15;
const tertiaryCaptionSegmentedButtonFontSize = 13;
const buttonFontSize = 17;
const textInputFontSize = 17;
const textInputSmallFontSize = 13;
const actionBarFontSize = 10;

const pageModalTitleLargerLineHeight = 41;
const pageModalTitleLineHeight = 22;
const titleLineHeight = 22;
const headerLineHeight = 20;
const paragraphLinkLineHeight = 22;
const secondaryLineHeight = 20;
const tertiaryCaptionSegmentedButtonLineHeight = 18;
const buttonLineHeight = 22;
const textInputLineHeight = 22;
const textInputSmallLineHeight = 18;
const actionBarLineHeight = 12;

const pageModalTitleLargerFontWeight = FontWeightReadable.Bold;
const pageModalTitleFontWeight = FontWeightReadable.Semibold;
const titleFontWeight = FontWeightReadable.Medium;
const headerFontWeight = FontWeightReadable.Medium;
const paragraphLinkFontWeight = FontWeightReadable.Regular;
const secondaryFontWeight = FontWeightReadable.Regular;
const tertiaryCaptionSegmentedButtonFontWeight = FontWeightReadable.Regular;
const buttonFontWeight = FontWeightReadable.Semibold;
const textInputFontWeight = FontWeightReadable.Regular;
const textInputSmallFontWeight = FontWeightReadable.Regular;
const actionBarFontWeight = FontWeightReadable.Medium;

// https://learnui.design/blog/ios-font-size-guidelines.html

export const TYPOGRAPHY = {
  pageModalTitleLarger: {
    fontFamily: 'System',
    fontSize: pageModalTitleLargerFontSize,
    fontWeight: pageModalTitleLargerFontWeight,
    lineHeight: pageModalTitleLargerLineHeight,
  },
  pageModalTitle: {
    fontFamily: 'System',
    fontSize: pageModalTitleFontSize,
    fontWeight: pageModalTitleFontWeight,
    lineHeight: pageModalTitleLineHeight,
  },
  title: {
    fontFamily: 'System',
    fontSize: titleFontSize,
    fontWeight: titleFontWeight,
    lineHeight: titleLineHeight,
  },
  header: {
    fontFamily: 'System',
    fontSize: headerFontSize,
    fontWeight: headerFontWeight,
    lineHeight: headerLineHeight,
  },
  paragraphLink: {
    fontFamily: 'System',
    fontSize: paragraphLinkFontSize,
    fontWeight: paragraphLinkFontWeight,
    lineHeight: paragraphLinkLineHeight,
  },
  secondary: {
    fontFamily: 'System',
    fontSize: secondaryFontSize,
    fontWeight: secondaryFontWeight,
    lineHeight: secondaryLineHeight,
  },
  tertiaryCaptionSegmentedButton: {
    fontFamily: 'System',
    fontSize: tertiaryCaptionSegmentedButtonFontSize,
    fontWeight: tertiaryCaptionSegmentedButtonFontWeight,
    lineHeight: tertiaryCaptionSegmentedButtonLineHeight,
  },
  button: {
    fontFamily: 'System',
    fontSize: buttonFontSize,
    fontWeight: buttonFontWeight,
    lineHeight: buttonLineHeight,
  },
  textInput: {
    fontFamily: 'System',
    fontSize: textInputFontSize,
    fontWeight: textInputFontWeight,
    lineHeight: textInputLineHeight,
  },
  textInputSmall: {
    fontFamily: 'System',
    fontSize: textInputSmallFontSize,
    fontWeight: textInputSmallFontWeight,
    lineHeight: textInputSmallLineHeight,
  },
  actionBar: {
    fontFamily: 'System',
    fontSize: actionBarFontSize,
    fontWeight: actionBarFontWeight,
    lineHeight: actionBarLineHeight,
  },
};
