import { Router } from 'express';
import { AdminRoutes } from '../modules/Admin/admin.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { UserRoutes } from '../modules/User/user.route';
import { QueryRoutes } from '../modules/Queries/query.routes';
import { JobApplicationRoutes } from '../modules/JobApplications/jobApplication.routes';
import { ReviewRoutes } from '../modules/Review/review.route';
import { ServiceRoutes } from '../modules/Service/service.route';
import { TeamRoutes } from '../modules/Team/team.route';
import { HiringPostRoutes } from '../modules/HiringPost/hiringPost.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },

  {
    path: '/admins',
    route: AdminRoutes,
  },

  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/queries',
    route: QueryRoutes,
  },
  {
    path: '/job-applications',
    route: JobApplicationRoutes,
  },
  {
    path: '/reviews',
    route: ReviewRoutes,
  },
  {
    path: '/services',
    route: ServiceRoutes,
  },
  {
    path: '/our-team',
    route: TeamRoutes,
  },
  {
    path: '/hiring',
    route: HiringPostRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
