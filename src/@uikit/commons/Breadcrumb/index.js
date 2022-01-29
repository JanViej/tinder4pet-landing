import { Breadcrumb as AntBreadcrumb } from 'antd';
import PropTypes from 'prop-types';
import Link from '../Link';

export default function Breadcrumb({ data, center, className }) {
  return (
    <AntBreadcrumb
      separator="·"
      className={`${center ? 'text-center' : ''} ${className || ''}`}
    >
      {data.map((d, idx) => (
        <AntBreadcrumb.Item key={`bread-crumb-${String(idx)}`}>
          {d.href ? (
            <Link href={d.href}>{d.title}</Link>
          ) : (
            <span href={d.href}>{d.title}</span>
          )}
        </AntBreadcrumb.Item>
      ))}
    </AntBreadcrumb>
  );
}

Breadcrumb.propTypes = {
  data: PropTypes.any,
  center: PropTypes.bool,
  className: PropTypes.string,
};
