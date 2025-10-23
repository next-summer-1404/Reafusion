'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';
import { ChevronLeft } from 'lucide-react';

interface IProps {
  homeElement: React.ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
  currentItem?: string; // اضافه کردن پراپ جدید برای currentItem
}

const pathTranslations: { [key: string]: string } = {
  home: 'خانه',
  mortageandrent: 'رهن و اجاره',
  fastreservepage: 'رزرو سریع',
  about: 'درباره ما',
  contact: 'تماس با ما',
};

const Breadcrumb: FC<IProps> = ({
  homeElement,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
  currentItem,
}) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  const separator = <ChevronLeft className='text-gray' />;

  return (
    <div>
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link href={'/'}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          // اگه آخرین آیتم هستیم و currentItem داریم، از currentItem استفاده کن
          if (index === pathNames.length - 1 && currentItem) {
            let itemClasses = `${listClasses} ${activeClasses}`;
            let itemLink = currentItem;
            if (capitalizeLinks) {
              itemLink = itemLink.charAt(0).toUpperCase() + itemLink.slice(1);
            }
            return (
              <li key={index} className={itemClasses}>
                {itemLink} {/* لینک رو حذف کردیم چون دیگه نیاز به href نداره */}
              </li>
            );
          }

          let href = `/${pathNames.slice(0, index + 1).join('/')}`;
          let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses;

          // translate link name or use link instead
          let itemLink = pathTranslations[link.toLowerCase()] || link;
          if (capitalizeLinks) {
            itemLink = itemLink.charAt(0).toUpperCase() + itemLink.slice(1);
          }

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;