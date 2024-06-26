const rateLimiter = (req: any, res: any, next: any) =>  {
    const ip = req.ip;
    
    if(req.body.count > 5) {
        return 429
    }

    next();
}

export default rateLimiter;