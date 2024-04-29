import Skeleton from '@mui/material/Skeleton';

export function ItemProductsSkeleton() {

    return (
        <div className='item'>
            <div className='item-photo'>
                <Skeleton className="item-photo-img" variant="rectangular" width={1000} height={800} animation="wave" />
            </div>
            
            <div className='item-information'>
                <div className='item-information-left'>
                    <Skeleton variant="rectangular" width={'100%'} height={25} animation="wave" />
                    
                </div>
                <div className='item-information-right'>
                    <Skeleton variant="rounded" width={'80%'} height={35} animation="wave" />
                </div>
            </div>   

            <div className='item-descrition'>
                <Skeleton variant="rectangular"  width={'100%'} height={35} animation="wave" />
            </div>

            <div className='item-button'>
                <Skeleton variant="rounded" width={'100%'} height={'100%'} animation="wave" />
            </div>

        </div>
    );
}