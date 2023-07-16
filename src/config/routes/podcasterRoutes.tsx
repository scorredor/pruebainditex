import { Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { lazy, ReactNode, Suspense } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { Header } from '../../shared/components/compound/header';
import styles from './index.module.scss'
import HeaderSlice from '../../shared/store/headerSlice';
import { Loading } from '../../shared/components/basic/loading';

const Home = lazy(() => import('../../modules/podcast/screen/pages/index'))
const PodcastDetail = lazy(() => import('../../modules/podcast/screen/pages/podcastDetail/index'))
const Episode = lazy(() => import('../../modules/podcast/screen/pages/episodie/index'))

export default function PodcasterRoutes() {

    const navigate = useNavigate()
    const location = useLocation();
    const headerBarStore = useAppSelector(state => state.headerBar)
    const headerActiosn = HeaderSlice.actions
    const dispatch = useAppDispatch();

    const includeHeader = (content: ReactNode) => {
        return <div className={styles.header}>
            <Header onClickTitle={() => {
                if (location.pathname !== '/')
                    dispatch(headerActiosn.setShowLoading(true))
                navigate('/')
            }} showLoading={headerBarStore.showLoading} title={headerBarStore.title} />
            {content}
        </div>
    }

    return (
        <>
            {
                includeHeader(
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
                            <Route path="/podcast/:podcastId/episode/:episodeId" element={<Episode />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </Suspense>
                )
            }
        </>
    );
}