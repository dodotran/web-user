import { Box, Breadcrumbs, Grid, Link, Stack, Typography } from '@mui/material';
import Image from 'next/image';

function About() {
  return (
    <Box>
      <Box sx={{
        width: '100%',
        height: '275px',
        backgroundImage: 'url("https://theme.hstatic.net/200000719085/1001100454/14/about01_banner_bkg.jpg?v=154")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Stack
          useFlexGap
          direction={'column'}
          sx={{ color: 'white' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          justifyContent={'center'}
          height={'100%'}
          position={'relative'}
          gap={2}
          px={10}
        >
          <Box zIndex={10}>
            <Typography variant="h2" component="h2" textTransform={'uppercase'}>
              Giới thiệu
            </Typography>
            <Breadcrumbs aria-label="breadcrumb" sx={{ marginTop: 3, color: 'white' }}>
              <Link underline="none" color="white" href="/">
                Trang chủ
              </Link>
              <Typography sx={{ color: 'white' }}>Giới thiệu</Typography>
            </Breadcrumbs>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
          ></Box>
        </Stack>
      </Box>
      <Box sx={{ margin: '50px 0' }}>
        <Typography variant="body2" textAlign={'center'} sx={{ letterSpacing: '5px' }} textTransform={'uppercase'}>
          Về chúng tôi
        </Typography>
        <Typography variant="h2" component="h2" textAlign={'center'} margin={'20px 0'}>
          HIZU DRESS UP
        </Typography>
        <Grid container spacing={5} sx={{ margin: 'auto' }} maxWidth={'70%'}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" component="p" fontWeight={400} lineHeight={'30px'}>
              Hizu Dress Up là thương hiệu thời trang nữ chuyên về váy đầm, áo dài, áo dài cách tân, áo dài cưới, áo dài
              dự tiệc, áo dài công sở, áo dài dạ hội Hizu Dress Up chuyên may đo váy đầm, áo dài, áo dài cách tân, áo dài
              cưới, áo dài dự tiệc, áo dài công sở, áo dài dạ hội theo yêu cầu của khách hàng. Với đội ngũ thiết kế chuyên
              nghiệp, tận tâm và nhiệt huyết, Hizu Dress Up cam kết mang đến cho khách hàng những sản phẩm chất lượng, đẹp
              mắt, giá cả hợp lý.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" component="p" fontWeight={400} lineHeight={'30px'}>
              Hizu Dress Up là thương hiệu thời trang nữ chuyên về váy đầm, áo dài, áo dài cách tân, áo dài cưới, áo dài
              dự tiệc, áo dài công sở, áo dài dạ hội Hizu Dress Up chuyên may đo váy đầm, áo dài, áo dài cách tân, áo dài
              cưới, áo dài dự tiệc, áo dài công sở, áo dài dạ hội theo yêu cầu của khách hàng. Với đội ngũ thiết kế chuyên
              nghiệp, tận tâm và nhiệt huyết, Hizu Dress Up cam kết mang đến cho khách hàng những sản phẩm chất lượng, đẹp
              mắt, giá cả hợp lý.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid spacing={5} container sx={{ margin: 'auto' }} padding={'0 20px'}>
        <Grid item xs={12} md={6}>
          <Image src="https://theme.hstatic.net/200000719085/1001100454/14/about01_introduce1_img.jpg?v=155" layout="responsive" width={767} height={480} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2" textAlign={'center'} sx={{ letterSpacing: '5px' }} textTransform={'uppercase'}>
            THÔNG ĐIỆP THỜI TRANG TỪ
          </Typography>
          <Typography variant="h2" component="h2" textAlign={'center'} margin={'20px 0'}>
            HIZU FOUNDER
          </Typography>
          <Typography variant="body2" component="p" fontWeight={400} lineHeight={'30px'}>
            Hizu Dress Up là thương hiệu thời trang nữ chuyên về váy đầm, áo dài, áo dài cách tân, áo dài cưới, áo dài
            dự tiệc, áo dài công sở, áo dài dạ hội Hizu Dress Up chuyên may đo váy đầm, áo dài, áo dài cách tân, áo dài
            cưới, áo dài dự tiệc, áo dài công sở, áo dài dạ hội theo yêu cầu của khách hàng. Với đội ngũ thiết kế chuyên
            nghiệp, tận tâm và nhiệt huyết, Hizu Dress Up cam kết mang đến cho khách hàng những sản phẩm chất lượng, đẹp
            mắt, giá cả hợp lý.
          </Typography>
        </Grid>
      </Grid>
      <Grid spacing={5} container sx={{ margin: 'auto' }} padding={'20px'}>
        <Grid item xs={12} md={6} paddingTop={5}>
          <Typography variant="body2" textAlign={'center'} sx={{ letterSpacing: '5px' }} textTransform={'uppercase'}>
            THÔNG ĐIỆP THỜI TRANG TỪ
          </Typography>
          <Typography variant="h2" component="h2" textAlign={'center'} margin={'20px 0'}>
            HIZU FOUNDER
          </Typography>
          <Typography variant="body2" component="p" fontWeight={400} lineHeight={'30px'}>
            Hizu Dress Up là thương hiệu thời trang nữ chuyên về váy đầm, áo dài, áo dài cách tân, áo dài cưới, áo dài
            dự tiệc, áo dài công sở, áo dài dạ hội Hizu Dress Up chuyên may đo váy đầm, áo dài, áo dài cách tân, áo dài
            cưới, áo dài dự tiệc, áo dài công sở, áo dài dạ hội theo yêu cầu của khách hàng. Với đội ngũ thiết kế chuyên
            nghiệp, tận tâm và nhiệt huyết, Hizu Dress Up cam kết mang đến cho khách hàng những sản phẩm chất lượng, đẹp
            mắt, giá cả hợp lý.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src="https://theme.hstatic.net/200000719085/1001100454/14/about01_introduce1_img.jpg?v=155" layout="responsive" width={767} height={480} alt="" />
        </Grid>
      </Grid>

      <Grid spacing={2} container sx={{ margin: 'auto' }} padding={'0 40px'} maxWidth={'100%'}>
        <Grid item xs={12} md={3} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <Image src="https://theme.hstatic.net/200000719085/1001100454/14/about01_services_1_ico.png?v=155" width={50} height={50} alt="" />
          <Typography variant="h6" component="h6" textAlign={'center'} margin={'0'}>
            HỖ TRỢ THANH TOÁN CÀ THẺ 0% PHÍ
          </Typography>
          <Typography variant="body2" component="p" textAlign={'center'} fontWeight={400} lineHeight={'30px'}>
            Áp dụng dễ dàng qua thẻ tín dụng của hơn 20 ngân hàng lớn nhỏ tại Việt Nam
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <Image src="https://theme.hstatic.net/200000719085/1001100454/14/about01_services_1_ico.png?v=155" width={50} height={50} alt="" />
          <Typography variant="h6" component="h6" textAlign={'center'} margin={'0'}>
            HỖ TRỢ THANH TOÁN CÀ THẺ 0% PHÍ
          </Typography>
          <Typography variant="body2" component="p" textAlign={'center'} fontWeight={400} lineHeight={'30px'}>
            Áp dụng dễ dàng qua thẻ tín dụng của hơn 20 ngân hàng lớn nhỏ tại Việt Nam
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <Image src="https://theme.hstatic.net/200000719085/1001100454/14/about01_services_1_ico.png?v=155" width={50} height={50} alt="" />
          <Typography variant="h6" component="h6" textAlign={'center'} margin={'0'}>
            HỖ TRỢ THANH TOÁN CÀ THẺ 0% PHÍ
          </Typography>
          <Typography variant="body2" component="p" textAlign={'center'} fontWeight={400} lineHeight={'30px'}>
            Áp dụng dễ dàng qua thẻ tín dụng của hơn 20 ngân hàng lớn nhỏ tại Việt Nam
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <Image src="https://theme.hstatic.net/200000719085/1001100454/14/about01_services_1_ico.png?v=155" width={50} height={50} alt="" />
          <Typography variant="h6" component="h6" textAlign={'center'} margin={'0'}>
            HỖ TRỢ THANH TOÁN CÀ THẺ 0% PHÍ
          </Typography>
          <Typography variant="body2" component="p" textAlign={'center'} fontWeight={400} lineHeight={'30px'}>
            Áp dụng dễ dàng qua thẻ tín dụng của hơn 20 ngân hàng lớn nhỏ tại Việt Nam
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
