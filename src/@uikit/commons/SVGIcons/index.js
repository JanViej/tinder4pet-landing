import Icon from '@ant-design/icons';
import PropTypes from 'prop-types';
import {
  ICAdd,
  ICFacebook,
  ICTwitter,
  ICInstagram,
  ICLinkedIn,
  ICRightOutline,
  ICDownOutline,
  ICUpOutline,
  ICBookMark,
  ICShareFilled,
  ICBox,
  ICAward,
  ICFacebookSecond,
  ICGoogleSpecial,
  ICMobilePhone,
  ICArrowRightDash,
  ICUserFilled,
  ICCompany,
  ICLeftOutline,
  ICJob,
  ICDirection,
  ICFacebookCircle,
  ICCopyright,
  ICIsFairuse,
  ICTiktok,
  ICLocation,
  ICPhone,
  ICMail,
  ICCheckTwoColor,
  ICSearch,
  ICHorizontal,
  ICVertical,
  ICSquare,
  ICColorSingle,
  ICColorTwoTone,
  ICColorMultiple,
  ICInfoCircle,
} from './svg';

const IconWrapper = ({ SVGComponent, svgProps, ...props }) => (
  <Icon
    {...props}
    component={() => <SVGComponent {...svgProps} fill="none" />}
  />
);

IconWrapper.propTypes = {
  SVGComponent: PropTypes.any,
  svgProps: PropTypes.object,
};

export const FacebookIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICFacebook} />
);

export const TwitterIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICTwitter} />
);

export const InstagramIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICInstagram} />
);

export const LinkedInIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICLinkedIn} />
);

export const TiktokIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICTiktok} />
);

export const RightOutlineIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICRightOutline} />
);
export const LeftOutlineIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICLeftOutline} />
);

export const DownOutlineIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICDownOutline} />
);

export const UpOutlineIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICUpOutline} />
);

export const BookMarkIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICBookMark} />
);

export const ShareFilledIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICShareFilled} />
);

export const BoxIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICBox} />
);

export const AwardIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICAward} />
);

export const FacebookSecondIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICFacebookSecond} />
);

export const FacebookCircleIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICFacebookCircle} />
);

export const GoogleSpecialIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICGoogleSpecial} />
);

export const MobilePhoneIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICMobilePhone} />
);

export const ArrowRightDashIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICArrowRightDash} />
);

export const CompanyIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICCompany} />
);

export const JobIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICJob} />
);

export const UserFilledIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICUserFilled} />
);

export const DirectionIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICDirection} />
);

export const CopyrightIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICCopyright} />
);

export const IsFairuseIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICIsFairuse} />
);

export const LocationIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICLocation} />
);

export const PhoneIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICPhone} />
);

export const MailIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICMail} />
);

export const CheckTwoColorIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICCheckTwoColor} />
);

export const SearchIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICSearch} />
);

export const HorizontalIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICHorizontal} />
);

export const VerticalIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICVertical} />
);

export const SquareIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICSquare} />
);

export const ColorSingleIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICColorSingle} />
);

export const ColorTwoToneIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICColorTwoTone} />
);

export const ColorMultipleIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICColorMultiple} />
);

export const InfoCircleIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICInfoCircle} />
);

export const AddIcon = (props) => (
  <IconWrapper {...props} SVGComponent={ICAdd} />
);
