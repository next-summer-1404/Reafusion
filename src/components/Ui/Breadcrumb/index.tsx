'use client'
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
}) => {
    const paths = usePathname();
    const pathNames = paths.split('/').filter((path) => path);

    const separator = <ChevronLeft color="#777777" />;

    return (
        <div>
            <ul className={containerClasses}>
                <li className={listClasses}>
                    <Link href={'/'}>{homeElement}</Link>
                </li>
                {pathNames.length > 0 && separator}
                {pathNames.map((link, index) => {
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